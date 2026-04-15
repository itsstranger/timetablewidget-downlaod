export const config = {
  api: {
    bodyParser: {
      sizeLimit: '15mb' // APKs can be up to 10MB, plus base64 overhead
    }
  }
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { username, password, type, fileBase64, filename } = req.body;

  // 1. Verify Credentials using Environment Variables
  const validUser = process.env.ADMIN_USER || 'admin';
  const validPass = process.env.ADMIN_PASS || 'admin123'; // fallback for testing locally

  if (username !== validUser || password !== validPass) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  const token = process.env.GH_TOKEN;
  if (!token) {
    return res.status(500).json({ message: 'GitHub token (GH_TOKEN) is not configured in Vercel environment.' });
  }

  // 2. Set file paths based on type
  const repo = 'itsstranger/timetablewidget-downlaod';
  const filePath = type === 'beta' ? 'public/dhTimetableBeta.apk' : 'public/dhTimetable.apk';
  const url = `https://api.github.com/repos/${repo}/contents/${filePath}`;

  try {
    // 3. Get existing file SHA (required by GitHub API to update a file)
    const getRes = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Vercel-Updater'
      }
    });
    
    let sha = null;
    if (getRes.ok) {
       const fileData = await getRes.json();
       sha = fileData.sha;
    } else if (getRes.status !== 404) {
       throw new Error('Failed to access repo. Is GH_TOKEN correct?');
    }

    // 4. Commit new file via GitHub API
    const putRes = await fetch(url, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
        'User-Agent': 'Vercel-Updater'
      },
      body: JSON.stringify({
        message: `Update ${type.toUpperCase()} APK via Admin Portal`,
        content: fileBase64,
        sha: sha,
        branch: 'main'
      })
    });

    if (!putRes.ok) {
       const err = await putRes.json();
       throw new Error(err.message || 'Upload to GitHub failed');
    }

    return res.status(200).json({ message: 'Success' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: err.message });
  }
}
