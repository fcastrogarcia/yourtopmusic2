import React from "react";
import { any, object, string, number, objectOf, arrayOf } from "prop-types";
import styles from "./styles";

import { isMobile } from "react-device-detect";

const Track = ({ name, album, rank, artists }) => {
  const src = album.images[1].url;
  const albumName = album.name;
  const artistName = artists[0].name;

  return (
    <styles.Card isMobile={isMobile} track>
      <styles.Rank>{rank}</styles.Rank>
      <styles.Image src={src} alt={name} />
      <styles.Track>{name}</styles.Track>
      <styles.Artist>{artistName}</styles.Artist>
      <styles.Album>{albumName}</styles.Album>
    </styles.Card>
  );
};

Track.propTypes = {
  name: string,
  album: objectOf(any),
  rank: number.isRequired,
  artists: arrayOf(object),
};

Track.defaultProps = {
  name: "",
  album: { images: [{}, { url: "" }], name: "" },
  artist: [{ name: "" }],
};

export default Track;
