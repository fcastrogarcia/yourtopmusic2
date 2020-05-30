import React, { useState } from "react";
import styles from "./styles";
import redirect from "utils/redirect";

const LoginButton = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => setLoading(true);

  return (
    <styles.Layout>
      <styles.Wrapper>
        <styles.Title>
          Find out who your top artists and songs are.
        </styles.Title>
        <styles.Button onClick={handleClick} href={redirect}>
          {!loading ? (
            <>
              <styles.Icon /> Continue with Spotify
            </>
          ) : (
            <styles.Loader />
          )}
        </styles.Button>
      </styles.Wrapper>
    </styles.Layout>
  );
};
export default LoginButton;
