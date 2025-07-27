/**
 * Fetches posts from Instagram using the access token
 */
export async function fetchInstagramPosts(accessToken: string): Promise<any> {
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,like_count,comments_count&access_token=${accessToken}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch Instagram posts: ${response.status}`);
  }

  return response.json();
}