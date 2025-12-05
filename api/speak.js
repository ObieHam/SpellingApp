export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { word } = req.body;

    const response = await fetch(
      `https://texttospeech.googleapis.com/v1/text:synthesize?key=${process.env.GOOGLE_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          input: { text: word },
          voice: { 
            languageCode: 'en-US', 
            name: 'en-US-Neural2-J',
            ssmlGender: 'MALE' 
          },
          audioConfig: { 
            audioEncoding: 'MP3',
            speakingRate: 0.85 
          }
        })
      }
    );

    const data = await response.json();
    
    if (data.audioContent) {
      const audioBuffer = Buffer.from(data.audioContent, 'base64');
      res.setHeader('Content-Type', 'audio/mpeg');
      res.send(audioBuffer);
    } else {
      throw new Error('No audio content');
    }

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to generate speech' });
  }
}
