export default async function handler(req, res) {
  const { code } = req.query;

  if (!code) {
    res.status(400).send("Missing code parameter");
    return;
  }

  const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code,
    }),
  });

  const tokenData = await tokenRes.json();

  if (tokenData.error) {
    res.status(401).send(`Authentication error: ${tokenData.error_description}`);
    return;
  }

  const token = tokenData.access_token;
  const provider = "github";
  const tokenJson = JSON.stringify({ token, provider });

  res.setHeader("Content-Type", "text/html");
  res.send(`<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body>
<script>
(function() {
  var token = ${JSON.stringify(token)};
  var provider = "github";
  function receiveMessage(e) {
    window.opener.postMessage(
      "authorization:" + provider + ":success:" + JSON.stringify({ token: token, provider: provider }),
      e.origin
    );
  }
  window.addEventListener("message", receiveMessage, false);
  window.opener.postMessage("authorizing:" + provider, "*");
})();
<\/script>
</body>
</html>`);
}
