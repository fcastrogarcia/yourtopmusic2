import React, { useState, useEffect } from "react";
import Modal from "components/Modal";
import styles from "./styles";
import useCreatePlaylist from "../../hooks/useCreatePlaylist";

const Playlist = () => {
  const [open, setOpen] = useState(true);
  const [successView, setSuccessView] = useState(false);

  const {
    range,
    setRange,
    handleInit,
    state,
    handleDefault,
  } = useCreatePlaylist();
  const { loading, success, playlist } = state;

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    handleDefault();
    setOpen(false);
  };
  const handleChange = (e) => setRange(parseInt(e.target.value));

  useEffect(() => {
    if (success) {
      setSuccessView(true);
      setTimeout(() => {
        setSuccessView(false);
      }, 1500);
    }
  }, [success]);

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
                <styles.FormControl component="fieldset">
                  <styles.FormLabel component="legend">
                    Select a range
                  </styles.FormLabel>
                  <styles.RadioGroup
                    aria-label="range"
                    name="range1"
                    value={range}
                    onChange={handleChange}
                  >
                    <styles.FormControlLabel
                      value={0}
                      control={<styles.Radio />}
                      label="All Time"
                      selected={range === 0}
                    />
                    <styles.FormControlLabel
                      value={1}
                      control={<styles.Radio />}
                      label="Six Months"
                      selected={range === 1}
                    />
                    <styles.FormControlLabel
                      value={2}
                      control={<styles.Radio />}
                      label="Last Month"
                      selected={range === 2}
                    />
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
          {success && (
            <styles.ViewWrapper>
              {successView ? (
                <>tu playlist se creó con éxito</>
              ) : (
                <a
                  href={playlist.src}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <styles.Cover src={playlist.cover} />
                </a>
              )}
            </styles.ViewWrapper>
          )}
        </div>
      </Modal>
    </>
  );
};

export default Playlist;
