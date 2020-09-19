import React, { useState, useEffect } from "react";
import { bool, objectOf, string } from "prop-types";
import styles from "./styles";
import Zoom from "material/Zoom";
import Share from "components/Share";

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
              <styles.PartyPopper />
              <styles.Message>Playlist created!</styles.Message>
            </styles.Wrapper>
          </Zoom>
        ) : (
          <Zoom in={playlistView}>
            <styles.ShareWrapper>
              <a href={playlist.src} target="_blank" rel="noopener noreferrer">
                <styles.Cover src={playlist.cover} />
              </a>
              <Share href={playlist.src} />
            </styles.ShareWrapper>
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
