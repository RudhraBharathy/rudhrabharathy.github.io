# Notion API Setup Instructions

Based on Notion's official documentation, you need to update your `.env.local` file to use the correct environment variable name:

```
# Update your .env.local file to use this format
NOTION_API_KEY=your_notion_integration_token
```

1. Rename `NOTION_SECRET` to `NOTION_API_KEY` in your `.env.local` file
2. Make sure your database ID is correct (it should match `1e9f716d-0e63-80af-a7d8-fe360b6eed95`)
3. Ensure you've shared your database with your integration:
   - Go to your database in Notion
   - Click "Share" in the top right
   - Search for your integration name
   - Select it and click "Invite"

After making these changes, restart your development server to apply the new environment variables:

```bash
npm run dev
``` 