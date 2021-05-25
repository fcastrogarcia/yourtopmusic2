import React, { useState } from "react";
import styles from "./styles";

const TITLE = "Find out who your top artists and songs are.";
const BUTTON_TEXT = "Continue with Spotify";

const LoginButton = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => setLoading(true);

  return (
    <styles.Layout>
      <styles.Wrapper>
        <styles.Container>
          <styles.Title>{TITLE}</styles.Title>
          <styles.Button onClick={handleClick} href="/.netlify/functions/login">
            {!loading ? (
              <React.Fragment>
                <styles.Icon />
                {BUTTON_TEXT}
              </React.Fragment>
            ) : (
              <styles.Loader />
            )}
          </styles.Button>
        </styles.Container>
      </styles.Wrapper>
    </styles.Layout>
  );
};
export default LoginButton;
