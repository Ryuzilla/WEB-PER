export default function handler(req, res) {
  const clientId = process.env.GITHUB_CLIENT_ID;
  if (!clientId) {
    res.status(500).send("GITHUB_CLIENT_ID not configured");
    return;
  }

  const redirectUri = "https://web-per.vercel.app/api/callback";

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    scope: "repo,user",
    state: Math.random().toString(36).substring(2),
  });

  res.redirect(302, `https://github.com/login/oauth/authorize?${params}`);
}
