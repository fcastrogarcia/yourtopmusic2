const { BASE_URL, CLIENT_ID, CLIENT_SECRET } = process.env;
const SPOTIFY_URL = "https://accounts.spotify.com";
const CALLBACK_URL = `${BASE_URL}/.netlify/functions/callback`;
const HOME_URL = `${BASE_URL}/home`;

module.exports = {
  CALLBACK_URL,
  CLIENT_ID,
  CLIENT_SECRET,
  SPOTIFY_URL,
  HOME_URL,
  BASE_URL,
};
