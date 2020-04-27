import React from "react";
// import { arrayOf, any } from "prop-types";
import styles from "./styles";

const Container = ({ children, ...rest }) => (
  <styles.Container {...rest}>
    <styles.Content>{children}</styles.Content>
  </styles.Container>
);

Container.propTypes = {};

export default Container;
