import React, { useState } from "react";
import Modal from "components/Modal";
import styles from "./styles";
import useCreatePlaylist from "./hooks/useCreatePlaylist";

const Playlist = () => {
  const [open, setOpen] = useState(true);
  const { setRange, handleInit, state } = useCreatePlaylist();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <styles.Button onClick={handleOpen}>Create a playlist</styles.Button>
      <Modal open={open} handleClose={handleClose}>
        <styles.Wrapper>
          <styles.Button onClick={handleInit}>Create</styles.Button>
        </styles.Wrapper>
      </Modal>
    </>
  );
};

export default Playlist;
