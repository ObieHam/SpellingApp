// Optional serverless function for cloud storage
// Uncomment and configure if you want cross-device sync
// Requires: npm install @vercel/kv

// import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const { userId } = req.query;

    if (!userId) {
      return res.status(400).json({ error: 'userId is required' });
    }

    // Save data to cloud
    if (req.method === 'POST') {
      const { allWords, misspelledWords } = req.body;

      if (!Array.isArray(allWords) || !Array.isArray(misspelledWords)) {
        return res.status(400).json({ error: 'Invalid data format' });
      }

      // Uncomment to use Vercel KV:
      /*
      await kv.set(`user:${userId}:words`, JSON.stringify(allWords));
      await kv.set(`user:${userId}:misspelled`, JSON.stringify(misspelledWords));
      await kv.set(`user:${userId}:updated`, new Date().toISOString());
      */

      return res.json({ 
        success: true,
        message: 'Data saved successfully',
        timestamp: new Date().toISOString()
      });
    }

    // Load data from cloud
    if (req.method === 'GET') {
      // Uncomment to use Vercel KV:
      /*
      const allWords = JSON.parse(await kv.get(`user:${userId}:words`) || '[]');
      const misspelledWords = JSON.parse(await kv.get(`user:${userId}:misspelled`) || '[]');
      const lastUpdated = await kv.get(`user:${userId}:updated`);

      return res.json({ 
        allWords, 
        misspelledWords,
        lastUpdated
      });
      */

      // Default response when KV is not configured
      return res.json({ 
        allWords: [], 
        misspelledWords: [],
        message: 'Cloud storage not configured. Enable Vercel KV to use this feature.'
      });
    }

    return res.status(405).json({ error: 'Method not allowed' });

  } catch (error) {
    console.error('Storage Error:', error);
    return res.status(500).json({ error: 'Storage operation failed' });
  }
}

// To enable cloud storage:
// 1. Create Vercel KV database in dashboard (Storage → Create → KV)
// 2. Run: npm install @vercel/kv
// 3. Uncomment the kv import and kv operations above
// 4. Deploy with: vercel --prod
