import React, { Fragment } from "react";
import { string } from "prop-types";
import styles from "./styles";

import Tooltip from "material/Tooltip";
import Equalizer from "../Equalizer";

import usePlayTrack from "./hooks/usePlayTrack";

const Player = ({ src, id, setPlaying, isPlaying }) => {
  const { ref, handlePlay: play, handlePause } = usePlayTrack(id, setPlaying);

  const handlePlay = src && play;

  const tip = "Oops! No preview for this song";

  const player = () => (
    <styles.Player
      onClick={isPlaying ? handlePause : handlePlay}
      active={src}
      disableRipple={!src}
    >
      <Fragment>{isPlaying ? <styles.Pause /> : <styles.Play />}</Fragment>
    </styles.Player>
  );

  return (
    <Fragment>
      {src ? player() : <Tooltip title={tip}>{player()}</Tooltip>}
      {isPlaying && <Equalizer />}
      <audio ref={ref} src={src} preload="none" />
    </Fragment>
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
