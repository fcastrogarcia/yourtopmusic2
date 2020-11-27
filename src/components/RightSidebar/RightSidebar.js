import React, { useContext } from "react";
import styles from "./styles";

import { Store } from "context/Store";

import User from "./components/User";

const RightSidebar = () => {
  const { store } = useContext(Store);
  const {
    user: { external_urls, display_name, images },
  } = store;

  return (
    <styles.RightSidebar>
      <User externalUrl={external_urls} displayName={display_name} images={images} />
    </styles.RightSidebar>
  );
};

export default RightSidebar;
