const { BASE_URL, CLIENT_ID, CLIENT_SECRET } = process.env;
const SPOTIFY_URL = "https://accounts.spotify.com";
const CALLBACK_URL = `${BASE_URL}/.netlify/functions/callback`;

module.exports = {
  CALLBACK_URL,
  CLIENT_ID,
  CLIENT_SECRET,
  SPOTIFY_URL,
};
