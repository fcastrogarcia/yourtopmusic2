import React from "react";
import { arrayOf, object, string, number } from "prop-types";
import styles from "./styles";

import { isMobile } from "react-device-detect";

const Artist = ({ name, genres, images, rank }) => {
  const src = images[0].url;
  const _genres = (isMobile ? genres.slice(0, 3) : genres).join(", ");

  return (
    <styles.Card isMobile={isMobile}>
      <styles.Rank>{rank}</styles.Rank>
      <styles.Image src={src} alt={name} />
      <styles.Name>{name}</styles.Name>
      <styles.Genres>{_genres}</styles.Genres>
    </styles.Card>
  );
};

Artist.propTypes = {
  name: string,
  genres: arrayOf(string),
  images: arrayOf(object),
  rank: number.isRequired,
};

Artist.defaultProps = {
  name: "",
  genres: [""],
  images: Array(2).fill({ url: "" }),
};

export default Artist;
