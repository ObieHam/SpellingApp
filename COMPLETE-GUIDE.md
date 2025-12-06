# 🎓 Spelling Trainer - Complete Setup & Reference Guide

Everything you need to deploy and manage your spelling trainer app - all in one place!

---

## 📋 Table of Contents

1. [Quick Start (5 Minutes)](#quick-start)
2. [Detailed Setup Instructions](#detailed-setup)
3. [Adding Premium Voice](#premium-voice)
4. [Daily Operations](#daily-operations)
5. [Troubleshooting](#troubleshooting)
6. [Advanced Features](#advanced-features)
7. [Quick Reference](#quick-reference)

---

# 🚀 Quick Start {#quick-start}

Get your app live in 5 minutes - no coding or command line needed!

## What You'll Need

- ✅ The 10 code files (from artifacts)
- ✅ A GitHub account (free at github.com)
- ✅ A Vercel account (free at vercel.com)

## 3 Simple Steps

### Step 1: Upload to GitHub (2 minutes)

1. **Create Repository**
   - Go to [github.com/new](https://github.com/new)
   - Repository name: `spelling-trainer`
   - Description: "Interactive spelling practice web app"
   - Keep it Public (or Private - both work)
   - ⚠️ **DO NOT** check "Add a README file"
   - Click **Create repository**

2. **Upload Files**
   - Click **uploading an existing file**
   - Drag and drop these 8 files:
     ```
     index.html
     vercel.json
     package.json
     .gitignore
     .env.example
     README.md
     DEPLOYMENT.md
     COMMANDS.md
     ```
   - Scroll down → **Commit changes**

3. **Create API Folder**
   - Click **Add file** → **Create new file**
   - Type: `api/speak.js`
   - Paste the speak.js code from artifacts
   - Click **Commit changes**
   - Click **Add file** → **Create new file** again
   - Type: `api/storage.js`
   - Paste the storage.js code from artifacts
   - Click **Commit changes**

✅ **Done!** Files are on GitHub.

### Step 2: Deploy to Vercel (2 minutes)

1. **Sign Up**
   - Go to [vercel.com](https://vercel.com)
   - Click **Sign Up**
   - Choose **Continue with GitHub**
   - Authorize Vercel to access your GitHub

2. **Import Project**
   - You'll be on the Vercel Dashboard
   - Click **Add New...** → **Project**
   - Find your `spelling-trainer` repository
   - Click **Import**

3. **Deploy**
   - Leave all settings as default:
     - Framework Preset: Other
     - Root Directory: ./
     - Build Command: (empty)
     - Output Directory: (empty)
   - Click **Deploy**
   - Wait 30-60 seconds ⏱️
   - See confetti 🎊

✅ **Done!** Your app is live!

### Step 3: Test Your App (1 minute)

1. Click the **Visit** button or your deployment URL
2. Click **Add Words** → **Add Manually**
3. Type some test words (one per line):
   ```
   example
   spelling
   practice
   ```
4. Click **✅ Add Words**
5. Click **✏️ Practice All Words**
6. Click the 🔊 speaker button
7. Listen and type the word you hear
8. Click **✓ Check**

✅ **Done!** Your app works!

## 🎉 You're Live!

Your app URL: `https://spelling-trainer-xxx.vercel.app`

**What works now:**
- ✅ Add words manually or via CSV
- ✅ Practice spelling with audio
- ✅ Track misspelled words
- ✅ Persistent storage (localStorage)
- ✅ Free Web Speech voice (built-in browser voice)

---

# 📖 Detailed Setup Instructions {#detailed-setup}

## Understanding Your Project Structure

```
spelling-trainer/
├── index.html              # Main app interface
├── vercel.json            # Vercel configuration
├── package.json           # Dependencies
├── .gitignore             # Files to ignore in git
├── .env.example           # API key template
├── README.md              # Documentation
└── api/                   # Serverless functions
    ├── speak.js          # Text-to-speech endpoint
    └── storage.js        # Optional cloud storage
```

## How It Works

### Frontend (index.html)
- Single-page application
- No framework needed (pure HTML/CSS/JS)
- Uses localStorage to save words
- Plays pronunciation using Web Speech API (free)
- Can optionally use premium voice via serverless function

### Backend (api/ folder)
- **speak.js**: Calls ElevenLabs or Google TTS API
  - Your API key stays hidden on the server
  - Returns audio file to browser
  - Falls back to Web Speech if unavailable
- **storage.js**: Optional cloud storage
  - Can sync words across devices
  - Requires Vercel KV database

### Deployment Flow
1. You push code to GitHub
2. Vercel detects the push
3. Vercel builds and deploys automatically
4. Your app updates within 30 seconds

## Alternative Upload Methods

### Method A: GitHub Web Interface (Already covered above)
Best for beginners - just drag and drop files.

### Method B: GitHub Desktop (If you prefer GUI)

1. Download [GitHub Desktop](https://desktop.github.com)
2. Install and sign in with GitHub account
3. Click **File** → **Clone Repository**
4. Select your `spelling-trainer` repository
5. Choose where to save it locally
6. Copy all 10 project files into that folder
7. In GitHub Desktop, you'll see all new files
8. Add commit message: "Initial commit"
9. Click **Commit to main**
10. Click **Push origin**

### Method C: Command Line (For developers)

```bash
# Create local folder
mkdir spelling-trainer
cd spelling-trainer

# Add all your files to this folder
# Then:

git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/spelling-trainer.git
git push -u origin main
```

---

# 🎤 Adding Premium Voice {#premium-voice}

The app works great with the free Web Speech API, but premium voices sound more natural and professional.

## Why Premium Voice?

| Feature | Web Speech API (Free) | Premium Voice (ElevenLabs) |
|---------|----------------------|---------------------------|
| Cost | $0/month | $0/month (free tier) |
| Quality | Good, robotic | Excellent, natural |
| Consistency | Varies by browser | Always consistent |
| Characters/month | Unlimited | 10,000 (~2,000 words) |
| Setup | None needed | 5 minutes |

## Option A: ElevenLabs (Recommended)

### Get Your API Key

1. Go to [elevenlabs.io](https://elevenlabs.io)
2. Click **Sign Up** (top right)
3. Sign up with email or Google
4. Verify your email if prompted
5. You're now on the dashboard
6. Click your profile icon (top right)
7. Click **Profile + API key**
8. Under "API Keys" section, click **Copy** (or create new if needed)
9. Keep this tab open with your key visible

### Add API Key to Vercel

1. Open new tab → [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click on your **spelling-trainer** project
3. Click **Settings** in the top menu
4. Click **Environment Variables** in left sidebar
5. Click **Add New** button
6. Fill in the form:
   - **Key:** `ELEVENLABS_API_KEY`
   - **Value:** (paste your API key)
   - **Environments:** ✅ Check all three:
     - ✅ Production
     - ✅ Preview
     - ✅ Development
7. Click **Save**

### Redeploy to Apply Changes

1. Click **Deployments** in the top menu
2. Find your latest deployment (top of the list)
3. Click the **...** (three dots) button on the right
4. Click **Redeploy**
5. Click **Redeploy** again to confirm
6. Wait 30 seconds for deployment to complete

### Test Premium Voice

1. Open your app URL
2. Click **✏️ Practice All Words**
3. Look for the checkbox: **☐ Use Premium Voice PRO**
4. Check the box ✅
5. Click the 🔊 speaker button
6. You should hear high-quality AI voice!

**If it doesn't work:**
- Verify environment variable name is exactly `ELEVENLABS_API_KEY`
- Make sure you checked all 3 environments
- Confirm you clicked Redeploy after adding the key
- Check your ElevenLabs account has credits (free tier: 10,000 chars)

## Option B: Google Cloud Text-to-Speech

### Get Your API Key

1. Go to [console.cloud.google.com](https://console.cloud.google.com)
2. Sign in with Google account
3. Click **Select a project** → **New Project**
4. Project name: `spelling-trainer`
5. Click **Create**
6. Wait for project creation (~30 seconds)
7. In the search bar at top, type: "Text-to-Speech API"
8. Click **Cloud Text-to-Speech API**
9. Click **Enable**
10. Wait for API to enable (~30 seconds)
11. Click **Credentials** in left sidebar
12. Click **Create Credentials** → **API Key**
13. Your API key appears - click **Copy**
14. Click **Edit API key** (or Restrict Key)
15. Under "API restrictions":
    - Select **Restrict key**
    - Check only **Cloud Text-to-Speech API**
    - Click **Save**

### Add API Key to Vercel

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click your **spelling-trainer** project
3. **Settings** → **Environment Variables**
4. Click **Add New**
5. Fill in:
   - **Key:** `GOOGLE_TTS_API_KEY`
   - **Value:** (paste your API key)
   - **Environments:** ✅ Check all three
6. Click **Save**
7. Go to **Deployments** → **...** → **Redeploy**

### Test

Same as ElevenLabs - toggle "Use Premium Voice" and test.

## How Premium Voice Works

```
Your App (Browser)
    ↓ User clicks 🔊
    ↓ Sends word to /api/speak
Your Serverless Function (api/speak.js)
    ↓ Uses your API key (hidden from users)
    ↓ Calls ElevenLabs/Google TTS
    ↓ Gets audio file
    ↓ Returns to browser
Your App (Browser)
    ↓ Plays audio
```

**Security:** API keys never exposed to users - they stay on Vercel's servers.

---

# 📱 Daily Operations {#daily-operations}

## Updating Your App

### Edit Files on GitHub

1. Go to your repository: `github.com/YOUR_USERNAME/spelling-trainer`
2. Click the file you want to edit (e.g., `index.html`)
3. Click the **✏️ pencil icon** (Edit this file)
4. Make your changes
5. Scroll down to "Commit changes"
6. Add description (optional)
7. Click **Commit changes**
8. **Vercel automatically redeploys within 30 seconds!**

**What to edit:**
- **index.html** - Change colors, text, layout, add features
- **vercel.json** - Change server configuration
- **api/speak.js** - Modify voice settings, add voices
- **api/storage.js** - Customize storage logic

### Update Environment Variables

1. Vercel Dashboard → Your Project
2. **Settings** → **Environment Variables**
3. Find the variable to update
4. Click **Edit** (or Add New)
5. Update value
6. Click **Save**
7. ⚠️ **Must Redeploy:** Go to **Deployments** → **...** → **Redeploy**

**Common variables to update:**
- `ELEVENLABS_API_KEY` - If you regenerate your key
- `GOOGLE_TTS_API_KEY` - If you change Google projects

## Monitoring Your App

### View Visitor Analytics

**Path:** Vercel Dashboard → Project → **Analytics**

See:
- Total visits
- Unique visitors
- Top pages
- Geographic distribution
- Performance metrics

### Check Function Usage

**Path:** Vercel Dashboard → Project → **Functions**

See:
- Function invocations
- Execution time
- Error rate
- Click `speak.js` to see detailed logs

### Monitor API Usage

**ElevenLabs:**
1. Go to [elevenlabs.io/app](https://elevenlabs.io/app)
2. Click **Usage** (left sidebar)
3. See characters used this month
4. Free tier: 10,000/month (~2,000 words)

**Google TTS:**
1. Go to [console.cloud.google.com](https://console.cloud.google.com)
2. Select your project
3. **Billing** → **Reports and Cost**
4. Free tier: 1M characters/month (~200,000 words)

### View Deployment History

**Path:** Vercel Dashboard → Project → **Deployments**

See:
- All deployments (every git push)
- Status (Success/Failed)
- Deployment time
- Unique URL for each deployment
- Can roll back to any previous version

## Common Tasks

### Roll Back to Previous Version

**When:** Something broke after an update

1. Vercel Dashboard → **Deployments**
2. Find the last working deployment
3. Click **...** (three dots)
4. Click **Promote to Production**
5. Confirm
6. Your app reverts instantly!

### Check Error Logs

**When:** Premium voice not working, or other issues

1. Vercel Dashboard → **Functions**
2. Click `speak.js` (or the relevant function)
3. See recent invocations
4. Click any invocation to see:
   - Request details
   - Response
   - Error messages
   - Execution time

**Common errors:**
- `401 Unauthorized` - Invalid API key
- `429 Too Many Requests` - Out of credits
- `500 Internal Server Error` - Check function logs

### Add Custom Domain

**When:** You want `spelling-practice.com` instead of `spelling-trainer-xxx.vercel.app`

1. **Buy a domain** from:
   - [Namecheap](https://namecheap.com)
   - [GoDaddy](https://godaddy.com)
   - [Google Domains](https://domains.google)
   - Any registrar

2. **Add to Vercel:**
   - Vercel Dashboard → Project → **Settings** → **Domains**
   - Click **Add**
   - Enter your domain (e.g., `spelling-practice.com`)
   - Click **Add**

3. **Configure DNS:**
   - Vercel shows DNS instructions
   - Go to your domain registrar's DNS settings
   - Add the records Vercel specifies:
     - Usually an **A record** pointing to `76.76.21.21`
     - Or a **CNAME** pointing to `cname.vercel-dns.com`
   - Save DNS settings

4. **Wait for propagation:**
   - Usually 1-2 hours
   - Can take up to 48 hours
   - Vercel will show "Valid Configuration" when ready

5. **SSL Certificate:**
   - Vercel automatically provisions SSL
   - Your custom domain gets HTTPS for free!

---

# 🔧 Troubleshooting {#troubleshooting}

## Deployment Issues

### ❌ Deployment Failed

**Symptom:** Red X on deployment, app not updating

**Check:**
1. Vercel Dashboard → Deployments → Click failed deployment
2. Read the error message in logs

**Common causes:**

**Missing files:**
- Make sure all 10 files are on GitHub
- Check `api` folder has both `speak.js` and `storage.js`
- Fix: Upload missing files

**Syntax error in JSON:**
- Usually in `package.json` or `vercel.json`
- Use JSONLint.com to validate
- Common: missing comma, extra comma, wrong brackets
- Fix: Correct the JSON syntax

**Build error:**
- Check build logs for specific error
- Usually a typo or missing dependency
- Fix: Correct the error and push to GitHub

### ⚠️ Auto-Deploy Not Working

**Symptom:** You push to GitHub but Vercel doesn't deploy

**Fix:**
1. Settings → **Git**
2. Check **Production Branch** is set to `main` (or your branch name)
3. If disconnected, click **Connect** to reconnect repository
4. Try manual redeploy: Deployments → ... → Redeploy

## Voice Issues

### 🔇 Web Speech Not Speaking

**Symptom:** Free voice doesn't work, no sound

**Check:**
1. Browser compatibility:
   - ✅ Chrome, Edge: Excellent support
   - ⚠️ Safari: Works but different voice
   - ❌ Some browsers: Limited support
2. System volume not muted
3. Browser has permission to use audio
4. Try a different browser

**Fix:**
- Use Chrome or Edge for best results
- Check browser console (F12) for errors
- Reload the page

### 🎤 Premium Voice Not Working

**Symptom:** Toggle enabled but falls back to Web Speech

**Checklist:**
- [ ] Environment variable added in Vercel?
- [ ] Variable name exactly `ELEVENLABS_API_KEY` or `GOOGLE_TTS_API_KEY`?
- [ ] All 3 environments checked when saving?
- [ ] Redeployed after adding variable?
- [ ] API key is valid and hasn't been regenerated?
- [ ] Still have credits in your API account?

**Debug steps:**

1. **Check environment variable:**
   - Settings → Environment Variables
   - Verify name and value
   - If wrong, edit and save
   - Must redeploy after editing!

2. **Check function logs:**
   - Functions → speak.js
   - Look for error messages:
     - `401` = Invalid API key
     - `429` = Out of credits
     - `503` = API down (temporary)

3. **Test API key directly:**
   - For ElevenLabs: Try in their playground
   - For Google: Try in their console
   - If API key doesn't work there, regenerate it

4. **Regenerate API key:**
   - Get new key from ElevenLabs/Google
   - Update in Vercel: Settings → Env Variables → Edit
   - Save
   - Redeploy

### 🔊 Audio Quality Issues

**Symptom:** Voice sounds garbled, choppy, or distorted

**For Web Speech:**
- This is browser-dependent
- Try different browser
- Some browsers have better voices
- Consider upgrading to premium voice

**For Premium Voice:**
- Check internet connection
- Slow connection = choppy audio
- Try refreshing page
- Check API provider status page

## Data Issues

### 💾 Words Not Saving

**Symptom:** Words disappear after refresh

**Causes:**
1. **Incognito/Private Mode:**
   - localStorage doesn't work in private browsing
   - Solution: Use normal browser window

2. **Browser Settings:**
   - Cookies/storage disabled
   - Solution: Enable cookies and site data

3. **Browser Storage Full:**
   - Rare, but possible
   - Solution: Clear some browser data

4. **Different Browser/Device:**
   - localStorage is per-browser
   - Each browser has separate storage
   - Solution: Enable cloud storage (see Advanced Features)

**Check:**
- Open browser console (F12)
- Go to Application tab (Chrome) or Storage tab (Firefox)
- Look under Local Storage
- Should see `spellingTrainerData` key

### 📄 CSV Upload Not Working

**Symptom:** File uploads but no words appear

**Common causes:**

**Wrong format:**
```
# ❌ Wrong - Excel with multiple columns
Word,Definition,Example
hello,greeting,Hello world

# ✅ Correct - Simple list
hello
world
example
```

**File encoding:**
- Must be UTF-8
- Save as plain text CSV
- No special formatting

**Fix:**
1. Open CSV in notepad/textedit
2. Verify it's just words, one per line
3. Save as plain text
4. Try uploading again

## Performance Issues

### 🐌 App Loading Slowly

**Symptom:** Takes long time to load

**Causes:**
1. **Too many words:**
   - 1000+ words can slow down
   - Solution: Practice in smaller batches

2. **Network issues:**
   - Check your internet connection
   - Vercel CDN is fast, issue is usually local

3. **Browser issues:**
   - Too many tabs open
   - Clear browser cache
   - Restart browser

### ⚡ Function Timeout

**Symptom:** Premium voice fails with timeout

**Causes:**
1. API provider slow response
2. Network issues
3. Function execution limit reached

**Fix:**
- App automatically falls back to Web Speech
- Usually temporary
- Try again in a few minutes

## Account Issues

### 💳 Out of API Credits

**Symptom:** Premium voice stops working mid-month

**Check usage:**

**ElevenLabs:**
- [elevenlabs.io/app](https://elevenlabs.io/app) → Usage
- Free tier: 10,000 characters/month
- Resets monthly

**Google TTS:**
- [console.cloud.google.com](https://console.cloud.google.com)
- Billing → Reports
- Free tier: 1M characters/month

**Solutions:**
1. **Wait for reset:**
   - Credits refresh monthly
   - App falls back to Web Speech in meantime

2. **Upgrade plan:**
   - ElevenLabs Starter: $5/month for 30K chars
   - Google: Pay-as-you-go after free tier

3. **Use less:**
   - Practice fewer words per session
   - Replay less often

### 🔐 API Key Compromised

**Symptom:** Unusual usage, or key exposed

**Immediate action:**
1. Go to API provider dashboard
2. Regenerate/delete compromised key
3. Create new key
4. Update in Vercel: Settings → Env Variables
5. Save and redeploy

---

# 🎯 Advanced Features {#advanced-features}

## Enable Cloud Storage (Cross-Device Sync)

By default, words are saved in localStorage (browser only). Enable cloud storage to sync across devices.

### Setup Vercel KV

1. **Create Database:**
   - Vercel Dashboard → Your Project
   - Click **Storage** tab
   - Click **Create Database**
   - Select **KV** (Key-Value Store)
   - Database name: `spelling-trainer-kv`
   - Select region (closest to your users)
   - Click **Create**

2. **Vercel automatically adds environment variables** for KV connection

3. **Update Code:**
   - Go to your GitHub repository
   - Open `api/storage.js`
   - Click edit (pencil icon)
   - **Uncomment line 4:**
     ```javascript
     import { kv } from '@vercel/kv';
     ```
   - **Uncomment all KV operations** (remove `/*` and `*/` around the database calls)
   - Look for sections like:
     ```javascript
     /*
     await kv.set(`user:${userId}:words`, ...);
     */
     ```
   - Change to:
     ```javascript
     await kv.set(`user:${userId}:words`, ...);
     ```
   - Commit changes

4. **App automatically redeploys** with cloud storage!

### How to Use Cloud Storage

Once enabled, the app needs a user ID to sync data:

**Option 1: Add user login** (requires more code)
**Option 2: Generate UUID in browser** (simpler)

Example code to add to `index.html`:

```javascript
// Generate or get user ID
getUserId() {
    let userId = localStorage.getItem('userId');
    if (!userId) {
        userId = 'user-' + Math.random().toString(36).substr(2, 9);
        localStorage.setItem('userId', userId);
    }
    return userId;
},

// Save to cloud
async saveToCloud() {
    const userId = this.getUserId();
    await fetch('/api/storage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            userId,
            allWords: this.allWords,
            misspelledWords: this.misspelledWords
        })
    });
},

// Load from cloud
async loadFromCloud() {
    const userId = this.getUserId();
    const response = await fetch(`/api/storage?userId=${userId}`);
    const data = await response.json();
    this.allWords = data.allWords || [];
    this.misspelledWords = data.misspelledWords || [];
}
```

**Free tier:** 30,000 operations/month, 256 MB storage

## Customize Voice Settings

### Change ElevenLabs Voice

In `api/speak.js`, find:

```javascript
const voiceId = '21m00Tcm4TlvDq8ikWAM'; // Rachel voice
```

Available voices (check [elevenlabs.io/voice-library](https://elevenlabs.io/voice-library)):
- Rachel: `21m00Tcm4TlvDq8ikWAM` (Female, American)
- Drew: `29vD33N1CtxCmqQRPOHJ` (Male, American)
- Clyde: `2EiwWnXFnvU5JabPnv8n` (Male, American)
- Paul: `5Q0t7uMcjvnagumLfvZi` (Male, American)

Change the voiceId and commit to GitHub.

### Adjust Speaking Rate

In `api/speak.js`, find:

```javascript
voice_settings: {
    stability: 0.5,        // 0-1, lower = more varied
    similarity_boost: 0.75, // 0-1, higher = more similar to training
    style: 0.5,            // 0-1, expressiveness
}
```

For slower speech:
```javascript
// Add to Google TTS request:
speakingRate: 0.75,  // 0.25-4.0, default 1.0
```

### Add Multiple Languages

Modify `api/speak.js` to accept language parameter:

```javascript
const { word, language = 'en-US' } = req.body;

// For Google TTS:
voice: { 
    languageCode: language,
    name: `${language}-Neural2-J`
}
```

Then in frontend, pass language when calling API.

## Export/Import Word Lists

Add these functions to `index.html`:

```javascript
// Export words as JSON
exportWords() {
    const data = {
        allWords: this.allWords,
        misspelledWords: this.misspelledWords,
        exportDate: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], 
        { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'spelling-words.json';
    a.click();
},

// Import words from JSON
importWords(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        const data = JSON.parse(e.target.result);
        this.allWords = [...new Set([...this.allWords, ...data.allWords])];
        this.misspelledWords = [...new Set([...this.misspelledWords, 
            ...data.misspelledWords])];
        this.saveData();
        this.updateStats();
    };
    reader.readAsText(file);
}
```

Add buttons to UI:
```html
<button class="btn" onclick="app.exportWords()">📥 Export Words</button>
<input type="file" accept=".json" onchange="app.importWords(this.files[0])">
```

## Add Progress Tracking

Track practice statistics:

```javascript
// Add to app object
practiceHistory: [],

// After each practice session
saveSession() {
    const session = {
        date: new Date().toISOString(),
        wordsCount: this.currentPracticeList.length,
        correct: this.correctInSession,
        incorrect: this.incorrectInSession,
        accuracy: (this.correctInSession / 
            (this.correctInSession + this.incorrectInSession) * 100).toFixed(1)
    };
    this.practiceHistory.push(session);
    localStorage.setItem('practiceHistory', 
        JSON.stringify(this.practiceHistory));
},

// Display statistics
showStats() {
    const totalSessions = this.practiceHistory.length;
    const totalWords = this.practiceHistory.reduce((sum, s) => 
        sum + s.wordsCount, 0);
    const avgAccuracy = (this.practiceHistory.reduce((sum, s) => 
        sum + parseFloat(s.accuracy), 0) / totalSessions).toFixed(1);
    
    return {
        totalSessions,
        totalWords,
        avgAccuracy: avgAccuracy + '%'
    };
}
```

## Spaced Repetition

Implement spaced repetition algorithm:

```javascript
// Add difficulty levels to words
wordDifficulty: {}, // { word: { level: 0-5, lastPracticed: Date } }

// Update difficulty based on performance
updateDifficulty(word, correct) {
    if (!this.wordDifficulty[word]) {
        this.wordDifficulty[word] = { level: 0, lastPracticed: new Date() };
    }
    
    const difficulty = this.wordDifficulty[word];
    if (correct) {
        difficulty.level = Math.min(5, difficulty.level + 1);
    } else {
        difficulty.level = Math.max(0, difficulty.level - 1);
    }
    difficulty.lastPracticed = new Date();
},

// Sort words by priority (harder words first, older practice)
getPriorityWords() {
    return this.allWords.sort((a, b) => {
        const aDiff = this.wordDifficulty[a] || { level: 0, lastPracticed: new Date(0) };
        const bDiff = this.wordDifficulty[b] || { level: 0, lastPracticed: new Date(0) };
        
        // Lower level = higher priority
        if (aDiff.level !== bDiff.level) {
            return aDiff.level - bDiff.level;
        }
        
        // Older practice = higher priority
        return new Date(aDiff.lastPracticed) - new Date(bDiff.lastPracticed);
    });
}
```

---

# 📚 Quick Reference {#quick-reference}

## Essential Links

| Link | Purpose |
|------|---------|
| [Your GitHub Repo](https://github.com/YOUR_USERNAME/spelling-trainer) | Edit code |
| [Vercel Dashboard](https://vercel.com/dashboard) | Manage deployment |
| [Your Live App](https://spelling-trainer-xxx.vercel.app) | Use the app |
| [ElevenLabs Dashboard](https://elevenlabs.io/app) | Check voice usage |
| [Google Cloud Console](https://console.cloud.google.com) | Manage Google TTS |

## Common Actions

### Deploy App
1. GitHub: Upload files
2. Vercel: Import repo → Deploy
3. Done!

### Update Code
1. GitHub: Edit file → Commit
2. Vercel: Auto-deploys in 30s

### Add API Key
1. Get key from provider
2. Vercel: Settings → Env Variables → Add
3. Redeploy

### Check Errors
1. Vercel: Functions → speak.js
2. View logs
3. Check error messages

### Roll Back
1. Vercel: Deployments
2. Find working version → ... → Promote

### Add Domain
1. Buy domain
2. Vercel: Settings → Domains → Add
3. Configure DNS
4. Wait for propagation

## File Structure Reference

```
spelling-trainer/
├── index.html              # Frontend app
│   ├── HTML structure
│   ├── CSS styles
│   └── JavaScript logic
├── vercel.json            # Server config
│   ├── Function settings
│   └── CORS headers
├── package.json           # Dependencies
│   └── node-fetch for API calls
├── .gitignore             # Git exclusions
├── .env.example           # API key template
└── api/                   # Serverless functions
    ├── speak.js          # Text-to-speech
    │   ├── ElevenLabs support
    │   └── Google TTS fallback
    └── storage.js        # Cloud storage
        └── Vercel KV integration
```

## Environment Variables

| Variable | Service | Purpose |
|----------|---------|---------|
| `ELEVENLABS_API_KEY` | ElevenLabs | Premium voice |
| `GOOGLE_TTS_API_KEY` | Google Cloud | Alternative voice |
| Auto-added by Vercel KV | Vercel | Database connection |

## API Endpoints

### POST /api/speak
Generates audio pronunciation

**Request:**
```json
{
  "word": "example"
}
```

**Response:** Audio file (MP3)

**Fallback:** Returns JSON with `fallback: true` if no API configured

### POST /api/storage
Saves word lists (requires KV setup)

**Request:**
```json
{
  "userId": "user-abc123",
  "allWords": ["word1", "word2"],
  "misspelledWords": ["word1"]
}
```

### GET /api/storage?userId=xxx
Retrieves word lists

**Response:**
```json
{
  "allWords": ["word1", "word2"],
  "misspelledWords": ["word1"],
  "lastUpdated": "2024-01-01T00:00:00.000Z"
}
```

## Keyboard Shortcuts (in app)

| Key | Action |
|-----|--------|
| Enter | Check spelling (in practice mode) |
| Space | Replay word pronunciation |

## Browser Compatibility

| Browser | Web Speech | Premium Voice | Rating |
|---------|------------|---------------|--------|
| Chrome | ✅ Excellent | ✅ Yes | ⭐⭐⭐⭐⭐ |
| Edge | ✅ Excellent | ✅ Yes | ⭐⭐⭐⭐⭐ |
| Firefox | ✅ Good | ✅ Yes | ⭐⭐⭐⭐ |
| Safari | ⚠️ Different voice | ✅ Yes | ⭐⭐⭐ |
| Mobile Safari | ⚠️ Limited | ✅ Yes | ⭐⭐⭐ |
| Mobile Chrome | ✅ Good | ✅ Yes | ⭐⭐⭐⭐ |

## Free Tier Limits

### Hosting (Vercel)
- ✅ 100 GB bandwidth/month
- ✅ 100 GB-hours serverless execution
- ✅ Unlimited projects
- ✅ Custom domains

### Voice APIs
| Service | Free Tier | Paid Tier |
|---------|-----------|-----------|
| **Web Speech** | ∞ Unlimited | N/A |
| **ElevenLabs** | 10K chars/month (~2K words) | $5/mo = 30K chars |
| **Google TTS** | 1M chars/month (~200K words) | $4 per 1M after free tier |

### Storage
| Type | Free Tier | Limits |
|------|-----------|--------|
| **localStorage** | ~5-10 MB | Per browser |
| **Vercel KV** | 30K ops/month, 256 MB | Cross-device |

## Common Error Codes

| Code | Meaning | Solution |
|------|---------|----------|
| 401 | Invalid API key | Regenerate key, update in Vercel |
| 403 | Forbidden | Check API restrictions |
| 429 | Rate limit / Out of credits | Wait or upgrade plan |
| 500 | Server error | Check function logs |
| 503 | Service unavailable | API provider down, try later |

## Cost Calculator

### Example Usage
**Scenario:** School teacher, 30 students, 20 words/day

**Calculations:**
- Words/month: 30 students × 20 words × 20 days = 12,000 words
- Pronunciations/month: 12,000 × 3 replays avg = 36,000 plays
- Characters/month: 12,000 words × ~7 chars avg = 84,000 characters

**Costs:**
- Vercel hosting: $0 (under limits)
- ElevenLabs free tier: $0 only covers 10K chars
  - Need paid: $5/mo (30K chars) = ❌ Not enough
  - Need: $22/mo (100K chars) ✅
- Google TTS: $0 (under 1M free tier) ✅✅

**Recommendation:** Use Google TTS for schools/high-volume

## Performance Optimization

### Reduce Load Times
1. Minimize word count per practice session
2. Use browser caching (already enabled)
3. CDN automatically handles global distribution

### Reduce API Costs
1. Use Web Speech by default
2. Premium voice only when needed
3. Limit word replays
4. Cache pronunciations (add to localStorage)

## Security Best Practices

### ✅ Do
- Use environment variables for API keys
- Keep `.env.local` in `.gitignore`
- Restrict API keys to specific APIs
- Monitor usage regularly
- Regenerate keys if compromised

### ❌ Don't
- Commit API keys to GitHub
- Share API keys publicly
- Use root/admin API keys
- Ignore unusual usage patterns

## Backup & Recovery

### Backup Word Lists
```javascript
// Export to JSON
app.exportWords();

// Or manually:
const backup = localStorage.getItem('spellingTrainerData');
// Save this string somewhere safe
```

### Restore Word Lists
```javascript
// Import from JSON file
// Or manually:
localStorage.setItem('spellingTrainerData', backupString);
location.reload();
```

### Backup Code
- GitHub automatically stores all versions
- Can download ZIP: Code → Download ZIP
- Or clone: `git clone https://github.com/YOUR_USERNAME/spelling-trainer.git`

## Version History

Track changes in GitHub:
1. Repository → Commits
2. See all changes over time
3. Click any commit to see diff
4. Can revert any change

## Support Resources

### Official Documentation
- [Vercel Docs](https://vercel.com/docs)
- [ElevenLabs Docs](https://elevenlabs.io/docs)
- [Google TTS Docs](https://cloud.google.com/text-to-speech/docs)
- [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)

### Community Help
- [Vercel Discord](https://vercel.com/discord)
- [Vercel Support](https://vercel.com/support)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/vercel)

### This App
- Check this guide first
- View function logs for errors
- Test in different browser
- Check browser console (F12)

## Glossary

**Serverless Function:** Code that runs on-demand without managing servers (your API endpoints)

**Environment Variable:** Secure way to store API keys and secrets

**localStorage:** Browser storage that persists data locally

**CDN (Content Delivery Network):** Global network that caches your app for fast loading

**Deployment:** Process of publishing your code to the internet

**CI/CD:** Continuous Integration/Deployment - auto-deploys on git push

**API Key:** Secret token for accessing external services

**TTS (Text-to-Speech):** Technology that converts text to audio

**CORS:** Cross-Origin Resource Sharing - allows API calls from browser

**Git:** Version control system for tracking code changes

**Repository (Repo):** Storage location for your code

## Changelog Template

Keep track of your updates:

```markdown
## [1.0.0] - 2024-01-01
### Added
- Initial release
- Web Speech API support
- CSV upload feature

## [1.1.0] - 2024-01-15
### Added
- Premium voice support (ElevenLabs)
- Progress tracking

### Fixed
- CSV parsing bug
- Mobile layout issues
```

---

# 🎓 What You've Built

Congratulations! You now have:

✅ **A production web application** deployed globally
✅ **Serverless backend** with protected API keys
✅ **Text-to-speech integration** (free + premium options)
✅ **Persistent data storage** (localStorage + optional cloud)
✅ **Automatic deployments** (CI/CD pipeline)
✅ **HTTPS security** (SSL certificate)
✅ **CDN distribution** (fast loading worldwide)
✅ **Analytics & monitoring** (visitor tracking)
✅ **Version control** (rollback capability)
✅ **Custom domain support** (optional)

All through web interfaces - no command line required!

## Skills You've Learned

- 📦 Git repository management
- 🚀 Cloud deployment (Vercel)
- 🔧 Serverless architecture
- 🔐 Environment variable management
- 📊 Application monitoring
- 🌐 DNS configuration (if you added domain)
- 🔄 CI/CD workflows
- 🐛 Debugging & troubleshooting

## Next Steps

1. **Use your app** - Start practicing spelling!
2. **Share it** - Send URL to friends/students
3. **Customize it** - Change colors, add features
4. **Monitor it** - Check usage and optimize
5. **Expand it** - Add new features from Advanced section

## Keep Learning

- Explore Vercel's other features
- Try different voice APIs
- Add user authentication
- Build more serverless apps
- Share your experience!

---

**📧 Questions?** Review the relevant section above.

**🐛 Found a bug?** Check Troubleshooting section.

**💡 Have an idea?** Implement it! You now know how.

**🎉 Enjoy your spelling trainer app!**
