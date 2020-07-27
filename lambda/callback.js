const axios = require("axios");
const querystring = require("query-string");
const {
  CALLBACK_URL,
  CLIENT_ID,
  CLIENT_SECRET,
  SPOTIFY_URL,
} = require("./config");

exports.handler = async (event, context, callback) => {
  try {
    const { code } = event.queryStringParameters;
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

    callback(null, {
      statusCode: 200,
      body: JSON.stringify({ access_token }),
    });
  } catch (error) {
    callback(error);
  }
};
