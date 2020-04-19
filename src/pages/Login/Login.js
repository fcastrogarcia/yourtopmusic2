import React, { Fragment, useState } from "react";
import styles from "./styles";
import { ScaleLoader } from "react-spinners";
import Layout from "../../components/Layout";
import redirect from "../../utils/redirect";

const LoginButton = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => setLoading(true);

  return (
    <Fragment>
      <Layout>
        <styles.Button onClick={handleClick} href={redirect}>
          {!loading && <span>Connect </span>}
          {loading && <ScaleLoader color={"#FFFFFF"} height={22} />}
        </styles.Button>
      </Layout>
    </Fragment>
  );
};
export default LoginButton;
