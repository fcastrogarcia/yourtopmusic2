import React from "react";
import { arrayOf, object, string, number } from "prop-types";
import styles from "./styles";

import { isMobile } from "react-device-detect";

const Track = ({ name, images, rank }) => {
  const src = images[0].url;

  return (
    <styles.Card isMobile={isMobile} track>
      <styles.Rank>{rank}</styles.Rank>
      <styles.Image src={src} alt={name} />
      <styles.Name>{name}</styles.Name>
    </styles.Card>
  );
};

Track.propTypes = {
  name: string,
  images: arrayOf(object),
  rank: number.isRequired,
};

Track.defaultProps = {
  name: "",
  images: Array(2).fill({ url: "" }),
};

export default Track;
