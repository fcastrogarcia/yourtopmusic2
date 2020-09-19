import React from "react";
import styles from "./styles";

const linkProps = {
  href: "https://github.com/fcastrogarcia/yourtopmusic2",
  target: "_blank",
  rel: "noopener noreferrer",
};

const Footer = () => (
  <styles.Container>
    <styles.Text>
      Made with <styles.HotBevarage /> by{" "}
      <styles.Link {...linkProps}>Fredo</styles.Link>
    </styles.Text>
  </styles.Container>
);

export default Footer;
