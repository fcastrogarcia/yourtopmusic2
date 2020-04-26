import React, { Fragment, useState } from "react";
import styles from "./styles";
import { ScaleLoader } from "react-spinners";
import redirect from "../../utils/redirect";

const LoginButton = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => setLoading(true);

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
