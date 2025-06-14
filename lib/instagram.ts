/**
 * Fetches posts from Instagram using the access token
 */
export async function fetchInstagramPosts(accessToken: string): Promise<any> {
    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${accessToken}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch Instagram posts: ${response.status}`);
    }
    
    return response.json();
  }
  
  /**
   * Refreshes the Instagram access token
   * Call this function periodically to extend token validity
   */
  export async function refreshAccessToken(accessToken: string): Promise<string> {
    const url = `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${accessToken}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Failed to refresh token: ${response.status}`);
    }
    
    const data = await response.json();
    return data.access_token;
  }
  
  /**
   * Gets token expiration time in days
   */
  export function getTokenExpiryDays(expiresIn: number): number {
    const secondsInDay = 86400;
    return Math.floor(expiresIn / secondsInDay);
  }