import querystring from "querystring";

const param = querystring.stringify({
  returnTo:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/home"
      : "https://yourtopmusic.netlify.app/home",
});

export default `https://spotify-project-backend.herokuapp.com/login?${param}`;
