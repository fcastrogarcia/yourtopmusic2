import React, { useContext } from "react";
import styles from "./styles";

import { Store } from "context/Store";

import User from "./components/User";

const Header = () => {
  const { store } = useContext(Store);
  const {
    user: { external_urls, display_name, images },
  } = store;

  return (
    <styles.Header>
      <User
        externalUrl={external_urls}
        displayName={display_name}
        image={images}
      />
    </styles.Header>
  );
};

export default Header;
