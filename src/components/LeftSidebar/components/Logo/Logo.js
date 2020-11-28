import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles";

const Logo = () => {
  return (
    <styles.Container>
      <Link to="/chart">
        <styles.IconButton>
          <styles.Headphones />
        </styles.IconButton>
      </Link>
    </styles.Container>
  );
};

export default Logo;
