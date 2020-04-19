import React, { Fragment, useState } from "react";
import styles from "./styles";
import { ScaleLoader } from "react-spinners";
import querystring from "querystring";

const LoginButton = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => setLoading(true);

  const param = querystring.stringify({
    returnTo: "http://localhost:3000/home",
  });

  const redirect = `https://spotify-project-backend.herokuapp.com/login?${param}`;

  return (
    <Fragment>
      <styles.Button onClick={handleClick} href={redirect}>
        {!loading && <span>Connect </span>}
        {loading && <ScaleLoader color={"#FFFFFF"} height={22} />}
      </styles.Button>
    </Fragment>
  );
};
export default LoginButton;
