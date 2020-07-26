const { BASE_URL, CLIENT_ID, CLIENT_SECRET } = require("./config");

exports.handler = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    body: "Hoooola!",
  });
};
