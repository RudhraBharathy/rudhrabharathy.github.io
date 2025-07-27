interface InstagramPost {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  permalink: string;
  thumbnail_url?: string;
  timestamp: string;
  like_count?: number;
  comments_count?: number;
}
/**
 * Fetches posts from Instagram using the access token
 */
interface InstagramResponse {
  data: InstagramPost[];
}

export async function fetchInstagramPosts(
  accessToken: string
): Promise<InstagramResponse> {
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,like_count,comments_count&access_token=${accessToken}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch Instagram posts: ${response.status}`);
  }

  return (await response.json()) as InstagramResponse;
}
