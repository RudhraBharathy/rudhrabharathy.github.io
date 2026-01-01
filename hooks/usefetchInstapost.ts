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

const getSamplePosts = (): InstagramPost[] =>
  Array.from({ length: 9 }).map((_, i) => ({
    id: `sample-${i}`,
    media_url: `/fallback/${i + 1}.jpg`,
    permalink: "#",
    caption: `Sample photography work ${i + 1}`,
    timestamp: new Date().toISOString(),
    media_type: "IMAGE",
    like_count: Math.floor(Math.random() * 100),
  }));

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
        const fallback = getSamplePosts();
        setPosts(fallback);
        localStorage.setItem(CACHE_KEY, JSON.stringify(fallback));
        localStorage.setItem(CACHE_TIME_KEY, Date.now().toString());
        setError(err.message ?? "Failed to load posts");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading, error };
}
