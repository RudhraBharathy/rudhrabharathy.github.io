import { NextResponse } from "next/server";
import { Pool } from "pg";
import { z } from "zod";

export const dynamic = "force-static";

const pool = new Pool({
  connectionString: process.env.NEXT_NEON_DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

const InstagramPostSchema = z.object({
  id: z.string(),
  media_url: z.string().url(),
  permalink: z.string().url(),
  caption: z.string().optional(),
  timestamp: z.string(),
  media_type: z.enum(["IMAGE", "VIDEO", "CAROUSEL_ALBUM"]),
  like_count: z.number().optional(),
});

const InstagramResponseSchema = z.object({
  data: z.array(InstagramPostSchema),
});

export async function GET() {
  const client = await pool.connect();

  try {
    const { rows } = await client.query(
      `SELECT access_token FROM instagram_token ORDER BY created_at DESC LIMIT 1`
    );

    if (!rows.length) {
      throw new Error("Instagram token missing");
    }

    const accessToken = rows[0].access_token;

    const igRes = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,media_type,timestamp,like_count&access_token=${accessToken}`
    );

    if (!igRes.ok) {
      throw new Error("Instagram API error");
    }

    const json = await igRes.json();
    const validated = InstagramResponseSchema.parse(json);

    const filtered = validated.data.filter(
      (p) => p.media_type === "IMAGE" || p.media_type === "CAROUSEL_ALBUM"
    );

    return NextResponse.json(filtered);
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message ?? "Internal error" },
      { status: 500 }
    );
  } finally {
    client.release();
  }
}
