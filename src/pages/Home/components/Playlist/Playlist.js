import React, { useState } from "react";
import Modal from "components/Modal";
import styles from "./styles";
import useCreatePlaylist from "../../hooks/useCreatePlaylist";
import Radios from "./components/Radios";
import Views from "./components/Views";

const Playlist = () => {
  const [open, setOpen] = useState(true);

  const {
    range,
    setRange,
    handleInit,
    state,
    handleDefault,
  } = useCreatePlaylist();
  const { loading, success } = state;

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setRange(0);
    handleDefault();
    setOpen(false);
  };

  const handleChange = (e) => setRange(parseInt(e.target.value));

  console.log(state);

  return (
    <>
      <styles.OpenButton onClick={handleOpen}>
        Create a playlist
      </styles.OpenButton>
      <Modal open={open} handleClose={handleClose}>
        <div style={{ position: "relative" }}>
          <styles.IconButton onClick={handleClose}>
            <styles.Close />
          </styles.IconButton>
          {!success && (
            <styles.Wrapper>
              <styles.Top>
                <styles.Title>Create a playlist</styles.Title>
                <styles.FormControl>
                  <styles.FormLabel>Select a range</styles.FormLabel>
                  <styles.RadioGroup
                    aria-label="range"
                    name="range1"
                    value={range}
                    onChange={handleChange}
                  >
                    <Radios range={range} />
                  </styles.RadioGroup>
                </styles.FormControl>
              </styles.Top>
              <styles.Bottom>
                <styles.CreateButton onClick={handleInit} disabled={loading}>
                  {!loading ? "Create" : <styles.Loader />}
                </styles.CreateButton>
              </styles.Bottom>
            </styles.Wrapper>
          )}
          <Views {...state} />
        </div>
      </Modal>
    </>
  );
};

export default Playlist;
