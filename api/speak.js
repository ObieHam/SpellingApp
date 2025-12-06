// Serverless function for text-to-speech
// Supports both ElevenLabs and Google Cloud TTS

export default async function handler(req, res) {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { word } = req.body;

    if (!word || typeof word !== 'string') {
      return res.status(400).json({ error: 'Valid word is required' });
    }

    // Sanitize input
    const sanitizedWord = word.trim().substring(0, 100);

    // Try ElevenLabs first (if API key exists)
    if (process.env.ELEVENLABS_API_KEY) {
      try {
        const audio = await getElevenLabsAudio(sanitizedWord);
        res.setHeader('Content-Type', 'audio/mpeg');
        res.setHeader('Cache-Control', 'public, max-age=86400'); // Cache for 24 hours
        return res.send(audio);
      } catch (error) {
        console.error('ElevenLabs failed, trying Google:', error);
      }
    }

    // Fallback to Google Cloud TTS (if API key exists)
    if (process.env.GOOGLE_TTS_API_KEY) {
      const audio = await getGoogleTTSAudio(sanitizedWord);
      res.setHeader('Content-Type', 'audio/mpeg');
      res.setHeader('Cache-Control', 'public, max-age=86400');
      return res.send(audio);
    }

    // No API keys configured
    return res.status(503).json({ 
      error: 'No TTS service configured',
      fallback: true 
    });

  } catch (error) {
    console.error('TTS Error:', error);
    return res.status(500).json({ 
      error: 'Failed to generate speech',
      fallback: true 
    });
  }
}

// ElevenLabs API implementation
async function getElevenLabsAudio(word) {
  const voiceId = '21m00Tcm4TlvDq8ikWAM'; // Rachel voice
  
  const response = await fetch(
    `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
    {
      method: 'POST',
      headers: {
        'Accept': 'audio/mpeg',
        'Content-Type': 'application/json',
        'xi-api-key': process.env.ELEVENLABS_API_KEY
      },
      body: JSON.stringify({
        text: word,
        model_id: 'eleven_monolingual_v1',
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.75,
          style: 0.5,
          use_speaker_boost: true
        }
      })
    }
  );

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`ElevenLabs API error: ${error}`);
  }

  return Buffer.from(await response.arrayBuffer());
}

// Google Cloud TTS implementation
async function getGoogleTTSAudio(word) {
  const response = await fetch(
    `https://texttospeech.googleapis.com/v1/text:synthesize?key=${process.env.GOOGLE_TTS_API_KEY}`,
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
          speakingRate: 0.85,
          pitch: 0,
          volumeGainDb: 0
        }
      })
    }
  );

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Google TTS API error: ${error}`);
  }

  const data = await response.json();
  
  if (!data.audioContent) {
    throw new Error('No audio content received');
  }

  return Buffer.from(data.audioContent, 'base64');
}
