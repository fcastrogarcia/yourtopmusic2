const querystring = require("query-string");
const { CALLBACK_URL, CLIENT_ID, SPOTIFY_URL } = require("./config");

exports.handler = (event, context, callback) => {
  const scope = [
    "user-read-private",
    "user-read-email",
    "user-top-read",
    "playlist-modify-private",
    "playlist-modify-public",
  ].join(" ");

  const authUrl = `${SPOTIFY_URL}/authorize?${querystring.stringify({
    response_type: "code",
    client_id: CLIENT_ID,
    scope: scope,
    redirect_uri: CALLBACK_URL,
    show_dialog: true,
    state: "ASKFJNASJFNKAJSNFKKJ",
  })}`;

  const response = {
    statusCode: 302,
    headers: {
      Location: authUrl,
      "Cache-Control": "no-cache",
    },
  };

  return callback(null, response);
};
