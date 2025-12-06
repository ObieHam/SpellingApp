# 🎓 Spelling Trainer Web App

An interactive web application for spelling practice with AI-powered text-to-speech.

## ✨ Features

- 📝 Add words manually or via CSV upload
- 🔊 Audio pronunciation (standard Web Speech API + optional premium AI voices)
- 📊 Track misspelled words automatically
- 💾 Persistent storage using localStorage
- 🎯 Practice sessions with immediate feedback
- 📱 Fully responsive design

## 🚀 Quick Start (Local Development)

```bash
# 1. Clone or download this repository
git clone <your-repo-url>
cd spelling-trainer

# 2. Install dependencies
npm install

# 3. Run locally
npm run dev

# 4. Open http://localhost:3000
```

The app works immediately with the free Web Speech API (no API keys needed)!

## 🌐 Deploy to Vercel

### Method 1: Using Vercel CLI (Recommended)

```bash
# 1. Install Vercel CLI globally
npm install -g vercel

# 2. Login to Vercel
vercel login

# 3. Deploy
vercel

# 4. Deploy to production
vercel --prod
```

### Method 2: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your Git repository
4. Click "Deploy"

## 🎤 Setting Up Premium Voice (Optional)

Premium voices provide higher quality audio but require API keys. Choose one:

### Option A: ElevenLabs (Recommended)

**Best for:** Highest quality, natural-sounding voices

1. Sign up at [elevenlabs.io](https://elevenlabs.io)
2. Go to Profile → API Keys
3. Copy your API key
4. Add to Vercel:
   ```bash
   vercel env add ELEVENLABS_API_KEY
   # Paste your key
   # Select: Production, Preview, Development
   ```
5. Redeploy: `vercel --prod`

**Free Tier:** 10,000 characters/month

### Option B: Google Cloud Text-to-Speech

**Best for:** Good quality with generous free tier

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project
3. Enable "Cloud Text-to-Speech API"
4. Create API key in Credentials
5. Restrict key to Text-to-Speech API only
6. Add to Vercel:
   ```bash
   vercel env add GOOGLE_TTS_API_KEY
   # Paste your key
   # Select: Production, Preview, Development
   ```
7. Redeploy: `vercel --prod`

**Free Tier:** 1 million characters/month (first 0-4M)

### Testing Premium Voice

After setup:
1. Open your deployed app
2. Go to practice mode
3. Toggle "Use Premium Voice" (PRO badge)
4. Click the speaker button 🔊

If premium voice fails, the app automatically falls back to Web Speech API.

## 💾 Storage Options

### Current: localStorage (Default)

- ✅ Works offline
- ✅ No setup required
- ✅ Private to user
- ❌ Single device only

### Optional: Vercel KV (Cross-Device Sync)

To enable cloud storage across devices:

1. Create Vercel KV database in dashboard:
   - Storage → Create → KV Database
   
2. Install dependency:
   ```bash
   npm install @vercel/kv
   ```

3. Edit `api/storage.js`:
   - Uncomment the `import { kv } from '@vercel/kv';` line
   - Uncomment all KV operations

4. Deploy:
   ```bash
   vercel --prod
   ```

**Free Tier:** 30,000 commands/month, 256 MB storage

## 📁 Project Structure

```
spelling-trainer/
├── index.html           # Main app interface
├── api/
│   ├── speak.js        # Text-to-speech serverless function
│   └── storage.js      # Optional cloud storage endpoint
├── vercel.json         # Vercel configuration
├── package.json        # Dependencies
├── .env.example        # Environment variables template
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## 🎯 How to Use

### Adding Words

1. Click "Add Words"
2. Choose:
   - **Add Manually:** Type one word per line
   - **Upload CSV:** Upload a .csv or .txt file

### Practicing

1. Click "Practice All Words" or "Practice Misspelled Words"
2. Listen to the pronunciation (click 🔊 to replay)
3. Type the spelling
4. Get instant feedback
5. Review results at the end

### CSV Format

Your CSV file should contain words in one of these formats:

```
word1
word2
word3
```

Or:

```
word1,word2,word3
```

## 🛠 Technology Stack

- **Frontend:** Pure HTML/CSS/JavaScript (no frameworks!)
- **Backend:** Vercel Serverless Functions (Node.js)
- **Storage:** localStorage (default) + optional Vercel KV
- **Text-to-Speech:** Web Speech API + ElevenLabs/Google TTS
- **Deployment:** Vercel

## 🔒 Security

- API keys stored as Vercel environment variables (never in code)
- Serverless functions protect API keys from client exposure
- No authentication required for basic features
- Optional cloud storage can be added with user IDs

## 📝 API Endpoints

### `/api/speak` (POST)

Generates audio pronunciation for a word.

**Request:**
```json
{
  "word": "example"
}
```

**Response:** Audio file (MP3)

**Fallback:** Returns JSON with `fallback: true` if no API keys configured

### `/api/storage` (Optional)

Saves/loads word lists to cloud storage.

**POST Request:**
```json
{
  "userId": "unique-id",
  "allWords": ["word1", "word2"],
  "misspelledWords": ["word1"]
}
```

**GET Request:**
```
/api/storage?userId=unique-id
```

## 🐛 Troubleshooting

### Premium voice doesn't work

1. Check API key is set in Vercel dashboard
2. Verify environment variable name matches `.env.example`
3. Redeploy after adding environment variables
4. Check Vercel function logs for errors

### Words not saving

- localStorage works in all modern browsers
- Check browser isn't in private/incognito mode
- Ensure cookies/storage not disabled

### CSV upload not working

- File must be .csv or .txt format
- Check file encoding is UTF-8
- Try with simple format: one word per line

## 📚 Learning Resources

- [Vercel Documentation](https://vercel.com/docs)
- [ElevenLabs API Docs](https://elevenlabs.io/docs)
- [Google TTS Documentation](https://cloud.google.com/text-to-speech/docs)

## 📄 License

MIT License - Feel free to use and modify!

## 🤝 Contributing

Issues and pull requests welcome!

## 💡 Future Enhancements

- [ ] Multiple language support
- [ ] Custom voice selection
- [ ] Export progress reports
- [ ] Spaced repetition algorithm
- [ ] Multiplayer spelling competitions
- [ ] Import from popular word lists

---

Built with ❤️ for better spelling practice!
