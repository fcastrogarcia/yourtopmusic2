import React from "react";
import { string } from "prop-types";
import styles from "./styles";
import { isBrowser } from "react-device-detect";

const Share = ({ href }) => {
  const handleShareTW = () => {
    window.open(`http://www.twitter.com/share?url=${href}`, "Twitter");
  };

  const handleShareWA = () => {
    window.open(
      isBrowser
        ? `https://web.whatsapp.com/send?l=en&text=${href}`
        : `https://wa.me/?text=${href}`,
      "Whastapp"
    );
  };

  return (
    <React.Fragment>
      <styles.ShareButton>
        <styles.Overlay>share</styles.Overlay>
        <a href={href} target="_blank" rel="noopener noreferrer">
          <styles.Spotify />
        </a>
        <div onClick={handleShareWA}>
          <styles.Whatsapp />
        </div>
        <div onClick={handleShareTW}>
          <styles.Twitter />
        </div>
      </styles.ShareButton>
    </React.Fragment>
  );
};

Share.propTypes = {
  href: string,
};

Share.defaultProps = {
  href: "",
};

export default Share;
