const axios = require("axios");
const querystring = require("query-string");
const {
  CALLBACK_URL,
  CLIENT_ID,
  CLIENT_SECRET,
  SPOTIFY_URL,
  HOME_URL,
  BASE_URL,
} = require("./config");

const getCallback = (cb) => (url) =>
  cb(null, {
    statusCode: 302,
    headers: { Location: url, "Cache-Control": "no-cache" },
  });

exports.handler = async (event, context, callback) => {
  try {
    const { code, error } = event.queryStringParameters;

    const cb = getCallback(callback);

    if (error === "access_denied") return cb(`${BASE_URL}/connect`);

    const endpoint = `${SPOTIFY_URL}/api/token`;

    const data = querystring.stringify({
      grant_type: "authorization_code",
      code: code,
      redirect_uri: CALLBACK_URL,
    });

    const headers = {
      Authorization:
        "Basic " +
        Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    };

    const { access_token } = await axios
      .post(endpoint, data, { headers })
      .then((res) => res.data);

    if (!access_token) throw new Error("access token request failed");

    const successURL = `${HOME_URL}?${querystring.stringify({ access_token })}`;
    cb(successURL);
  } catch (error) {
    callback(error);
  }
};
