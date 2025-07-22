import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

interface InstagramPost {
  id: string;
  media_url: string;
  permalink: string;
  caption?: string;
  timestamp: string;
  media_type: string;
  like_count?: number;
}

const getSamplePosts = (): InstagramPost[] => {
  return Array(9)
    .fill(null)
    .map((_, index) => ({
      id: `sample-${index}`,
      media_url: `/api/placeholder/400/400`,
      permalink: "https://instagram.com",
      caption: `Sample photography work ${index + 1}`,
      timestamp: new Date().toISOString(),
      media_type: "IMAGE",
    }));
};

// Use public env vars set in your .env.local or Vercel
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_KEY!;

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default function useFetchInstapost() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInstagramPostsData = async () => {
      try {
        setLoading(true);

        const cached = sessionStorage.getItem("instagram_posts");
        if (cached) {
          const parsed = JSON.parse(cached);
          setPosts(parsed);
          return;
        }

        // Step 1: Fetch latest token from Supabase
        const { data, error: tokenError } = await supabase
          .from("instagram_token")
          .select("access_token")
          .order("updated_at", { ascending: false })
          .limit(1)
          .single();

        if (tokenError || !data)
          throw new Error("Failed to get token from Supabase");

        const accessToken = data.access_token;

        // Step 2: Call Instagram API using the token
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,media_type,timestamp&access_token=${accessToken}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch Instagram media");
        }

        const result = await response.json();

        const imageOnly = result.data.filter(
          (post: InstagramPost) =>
            post.media_type === "IMAGE" || post.media_type === "CAROUSEL_ALBUM"
        );

        setPosts(imageOnly);
        sessionStorage.setItem("instagram_posts", JSON.stringify(imageOnly));
      } catch (err: any) {
        console.error("Error fetching Instagram posts:", err);
        setError(err.message);
        const fallback = getSamplePosts();
        setPosts(fallback);
        sessionStorage.setItem("instagram_posts", JSON.stringify(fallback));
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramPostsData();
  }, []);

  return { posts, loading, error };
}
