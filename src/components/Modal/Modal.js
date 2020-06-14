import React from "react";
import { bool, func } from "prop-types";
import styles from "./styles";
import Fade from "@material-ui/core/Fade";

const Playlist = ({ open, handleClose, children }) => (
  <styles.Modal open={open} onClose={handleClose}>
    <Fade in={open}>
      <styles.Wrapper>{children}</styles.Wrapper>
    </Fade>
  </styles.Modal>
);

Playlist.propTypes = {
  open: bool,
  handleClose: func,
};

Playlist.defaultProps = {
  open: false,
  handleClose: () => {},
};

export default Playlist;
