import { useEffect, useState } from "react";

interface InstagramPost {
  id: string;
  media_url: string;
  permalink: string;
  caption?: string;
  timestamp: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  like_count?: number;
}

const CACHE_KEY = "instagram_posts";
const CACHE_TIME_KEY = "instagram_posts_time";
const CACHE_TTL = 1000 * 60 * 30;

export default function useFetchInstapost() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const cached = localStorage.getItem(CACHE_KEY);
        const cachedTime = localStorage.getItem(CACHE_TIME_KEY);

        if (
          cached &&
          cachedTime &&
          Date.now() - Number(cachedTime) < CACHE_TTL
        ) {
          setPosts(JSON.parse(cached));
          setLoading(false);
          return;
        }

        const res = await fetch("/api/instagram-posts");

        if (!res.ok) {
          throw new Error(`Fetch failed: ${res.status}`);
        }

        const data: InstagramPost[] = await res.json();

        setPosts(data);
        localStorage.setItem(CACHE_KEY, JSON.stringify(data));
        localStorage.setItem(CACHE_TIME_KEY, Date.now().toString());
      } catch (err: any) {
        setError(err.message ?? "Failed to load posts");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading, error };
}
