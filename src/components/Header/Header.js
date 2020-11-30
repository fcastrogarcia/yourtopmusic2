import React, { useContext } from "react";
import styles from "./styles";

import { Store } from "context/Store";
import useDevices from "hooks/useDevices";

import Logo from "./components/Logo";
import Navbar from "./components/NavBar";
import User from "./components/User";

const Header = () => {
  const { store } = useContext(Store);
  const { tablet } = useDevices();

  const {
    user: { external_urls, display_name, images },
  } = store;

  const Header = tablet ? styles.HeaderMobile : styles.Header;

  return (
    <Header>
      <Logo />
      {!tablet && <Navbar />}
      <User
        externalUrl={external_urls}
        displayName={display_name}
        images={images}
        isTablet={tablet}
      />
    </Header>
  );
};

export default Header;
