import querystring from "query-string";

const param = querystring.stringify({
  returnTo:
    process.env.NODE_ENV === "development"
      ? "http://192.168.0.59:3000/home"
      : "https://yourtopmusic.netlify.app/home",
});

export default `https://spotify-project-backend.herokuapp.com/login?${param}`;
