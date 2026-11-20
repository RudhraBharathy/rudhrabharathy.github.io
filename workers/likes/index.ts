export default {
  async fetch(request, env): Promise<Response> {
    const origin = request.headers.get("Origin");
    const allowed =
      origin !== null && env.ALLOWED_ORIGINS.split(",").includes(origin);
    const headers = new Headers({
      "Cache-Control": "no-store",
      Vary: "Origin",
      "X-Content-Type-Options": "nosniff",
    });
    if (allowed) {
      headers.set("Access-Control-Allow-Origin", origin);
      headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
      headers.set("Access-Control-Allow-Headers", "X-Visitor-ID, X-Like-Count");
    }
    const json = (body: object, status = 200) =>
      Response.json(body, { status, headers });

    if (new URL(request.url).pathname !== "/likes") {
      return json({ error: "Not found" }, 404);
    }
    if ((origin && !allowed) || (request.method === "POST" && !allowed)) {
      return json({ error: "Origin not allowed" }, 403);
    }
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers });
    }
    if (request.method !== "GET" && request.method !== "POST") {
      headers.set("Allow", "GET, POST, OPTIONS");
      return json({ error: "Method not allowed" }, 405);
    }

    try {
      const visitorId =
        request.headers.get("X-Visitor-ID")?.toLowerCase() || "";
      if (
        (visitorId || request.method === "POST") &&
        !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(
          visitorId,
        )
      ) {
        return json({ error: "Invalid visitor ID" }, 400);
      }
      const totalQuery = env.DB.prepare(
        "SELECT count, COALESCE((SELECT likes FROM portfolio_likes WHERE visitor_id = ?), 0) AS given FROM like_total WHERE id = 1",
      ).bind(visitorId);
      if (request.method === "POST") {
        const target = request.headers.get("X-Like-Count") ?? "1";
        if (!/^[1-5]$/.test(target)) {
          return json({ error: "Give between 1 and 5 hearts" }, 400);
        }
        const { success } = await env.LIKE_RATE_LIMITER.limit({
          key: request.headers.get("CF-Connecting-IP") || "local",
        });
        if (!success) {
          headers.set("Retry-After", "60");
          return json({ error: "Please try again in a minute" }, 429);
        }
        const [, total] = await env.DB.batch<{ count: number; given: number }>([
          env.DB.prepare(
            "INSERT INTO portfolio_likes (visitor_id, likes) VALUES (?, ?) ON CONFLICT(visitor_id) DO UPDATE SET likes = MAX(portfolio_likes.likes, excluded.likes)",
          ).bind(visitorId, Number(target)),
          totalQuery,
        ]);
        return json(total.results[0]);
      }
      const total = await totalQuery.first<{ count: number; given: number }>();
      if (!total) throw new Error("Like counter is not initialized");
      return json(total);
    } catch (error) {
      console.error("Portfolio likes request failed", error);
      return json({ error: "Likes are temporarily unavailable" }, 503);
    }
  },
} satisfies ExportedHandler<Env>;
