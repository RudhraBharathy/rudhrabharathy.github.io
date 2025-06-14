import type { NextApiRequest, NextApiResponse } from 'next';
import { refreshAccessToken, getTokenExpiryDays } from '@/lib/instagram';

type ResponseData = {
  success: boolean;
  message: string;
  expiresIn?: number;
  expiryDays?: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // Only allow this endpoint to be triggered by a scheduled job
  // Add your own security mechanism here (e.g., a secret key)
  const apiKey = req.headers['x-api-key'];
  if (apiKey !== process.env.INSTAGRAM_REFRESH_API_KEY) {
    return res.status(401).json({ 
      success: false, 
      message: 'Unauthorized' 
    });
  }

  try {
    const currentToken = process.env.INSTAGRAM_ACCESS_TOKEN;
    
    if (!currentToken) {
      return res.status(500).json({ 
        success: false, 
        message: 'No access token found in environment variables' 
      });
    }

    const result = await refreshAccessToken(currentToken);
    const expiresIn = 5184000; // 60 days in seconds, typical for Instagram tokens
    
    // You'll need to implement your own mechanism to update the token in your environment
    // For example, update a database record, configuration file, or environment variable
    
    // For demonstration only - in production, you'd save this token somewhere
    console.log('New token generated:', result);

    return res.status(200).json({
      success: true,
      message: 'Token refreshed successfully',
      expiresIn,
      expiryDays: getTokenExpiryDays(expiresIn)
    });
  } catch (error) {
    console.error('Error refreshing Instagram token:', error);
    return res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : 'Unknown error occurred'
    });
  }
}