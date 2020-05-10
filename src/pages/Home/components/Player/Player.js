import React from "react";
import { string } from "prop-types";
import styles from "./styles";

import usePlayTrack from "./hooks/usePlayTrack";

const Player = ({ src, id }) => {
  const { track, isPlaying, handlePlay, handlePause } = usePlayTrack(id);

  const _handlePlay = src && handlePlay;

  return (
    <React.Fragment>
      <styles.Player onClick={isPlaying ? handlePause : _handlePlay}>
        {isPlaying ? <styles.Pause /> : <styles.Play />}
      </styles.Player>
      <audio ref={track} src={src} preload="none" />
    </React.Fragment>
  );
};

Player.propTypes = {
  src: string,
  id: string,
};

Player.defaultProps = {
  src: "",
  id: "",
};

export default Player;
