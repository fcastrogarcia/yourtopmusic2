import querystring from "query-string";

const param = querystring.stringify({
  returnTo:
    process.env.NODE_ENV === "development"
      ? process.env.REACT_APP_LOCAL_URL
      : "https://yourtopmusic.netlify.app/home",
});

export default `https://spotify-project-backend.herokuapp.com/login?${param}`;
