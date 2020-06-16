import React, { useState, useEffect } from "react";
import { bool, objectOf, string } from "prop-types";
import styles from "./styles";
import Zoom from "material/Zoom";

const Views = ({ success, playlist }) => {
  const [successView, setSuccessView] = useState(true);

  //   useEffect(() => {
  //     if (success) {
  //       setSuccessView(true);
  //       setTimeout(() => {
  //         setSuccessView(false);
  //       }, 1500);
  //     }
  //   }, [success]);

  return (
    success && (
      <styles.ViewWrapper successView={successView}>
        {successView ? (
          <Zoom in={successView}>
            <styles.Check />
          </Zoom>
        ) : (
          <a href={playlist.src} target="_blank" rel="noopener noreferrer">
            <styles.Cover src={playlist.cover} />
          </a>
        )}
      </styles.ViewWrapper>
    )
  );
};

Views.propTypes = {
  success: bool,
  playlist: objectOf(string),
};

Views.defaultProps = {
  success: false,
  playlist: {
    cover: "",
    src: "",
  },
};

export default Views;
