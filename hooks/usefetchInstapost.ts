import { fetchInstagramPosts } from "@/lib/instagram";
import { useEffect, useState } from "react";

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

const config = {
  username: process.env.INSTAGRAM_USERNAME,
  accessToken: process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN,
};

export default function useFetchInstapost() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInstagramPostsdata = async () => {
      try {
        setLoading(true);
  
        const cached = sessionStorage.getItem("instagram_posts");
        if (cached) {
          const parsed = JSON.parse(cached);
          setPosts(parsed);
          return;
        }
  
        if (!config.accessToken) {
          throw new Error("AccessToken is undefined");
        }
  
        const data = await fetchInstagramPosts(config.accessToken);
        const imageOnly = data.data.filter(
          (post: { media_type: string }) =>
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
  
    fetchInstagramPostsdata();
  }, []);
  

  return { posts, loading, error };
}
