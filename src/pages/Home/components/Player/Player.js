import React, { Fragment } from "react";
import { string } from "prop-types";
import styles from "./styles";

import Tooltip from "material/Tooltip";

const Player = ({ src, play, pause, isPlaying }) => {
  const handlePlay = src && play;

  const tip = "Oops! No preview for this song";

  const player = () => (
    <styles.Player
      onClick={isPlaying ? pause : handlePlay}
      active={src}
      disableRipple={!src}
    >
      <Fragment>{isPlaying ? <styles.Pause /> : <styles.Play />}</Fragment>
    </styles.Player>
  );

  return (
    <Fragment>
      {src ? player() : <Tooltip title={tip}>{player()}</Tooltip>}
    </Fragment>
  );
};

Player.propTypes = {
  src: string,
};

Player.defaultProps = {
  src: "",
};

export default Player;
