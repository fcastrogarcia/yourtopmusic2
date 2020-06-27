import React, { useState, useEffect } from "react";
import { bool, objectOf, string } from "prop-types";
import styles from "./styles";
import Zoom from "material/Zoom";

const Views = ({ success, playlist }) => {
  const [successView, setSuccessView] = useState(false);
  const [playlistView, setPlaylistView] = useState(false);

  useEffect(() => {
    if (success) {
      setSuccessView(true);
      setTimeout(() => {
        setSuccessView(false);
        setPlaylistView(true);
      }, 1200);
    }
  }, [success]);

  return (
    success && (
      <styles.ViewWrapper successView={successView}>
        {successView ? (
          <Zoom in={successView}>
            <styles.Wrapper>
              <styles.Check />
              <styles.Message>Playlist is ready!</styles.Message>
            </styles.Wrapper>
          </Zoom>
        ) : (
          <Zoom in={playlistView}>
            <a href={playlist.src} target="_blank" rel="noopener noreferrer">
              <styles.Cover src={playlist.cover} />
            </a>
          </Zoom>
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
