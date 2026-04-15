export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { username, password } = req.body;

  // Verify Credentials using Environment Variables
  const validUser = process.env.ADMIN_USER || 'admin';
  const validPass = process.env.ADMIN_PASS || 'admin123'; // fallback for testing locally

  if (username !== validUser || password !== validPass) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  const token = process.env.GH_TOKEN;
  if (!token) {
    return res.status(500).json({ message: 'GitHub token (GH_TOKEN) is not configured in Vercel environment.' });
  }

  // Send the token back to the authenticated client securely
  return res.status(200).json({ token });
}
