const fetch = require('cross-fetch');

const exchangeCodeForToken = async (code) => {
  // TODO: Implement me!
  const client_id = process.env.GITHUB_CLIENT_ID;
  const client_secret = process.env.GITHUB_CLIENT_SECRET;

  const resp = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    header: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ client_id, client_secret, code }),
  });

  const { access_token } = await resp.json();
  return access_token;
};

const getGithubProfile = async (token) => {
  // TODO: Implement me!
  const resp = await fetch('https://api.github.com/user', {
    headers: {
      Authorization: `token ${token}`,
      Accept: 'application/vnd.github.v3+json',
    },
  });
  return resp.json();
};

module.exports = { exchangeCodeForToken, getGithubProfile };
