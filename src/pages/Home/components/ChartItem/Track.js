import React from "react";
import { any, object, string, number, objectOf, arrayOf } from "prop-types";
import styles from "./styles";

import { isMobile } from "react-device-detect";

import Player from "../Player";

const Track = ({ name, album, rank, artists, preview_url, id }) => {
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
      <styles.Player>
        <Player src={preview_url} id={id} />
      </styles.Player>
    </styles.Card>
  );
};

Track.propTypes = {
  name: string,
  album: objectOf(any),
  rank: number.isRequired,
  artists: arrayOf(object),
  preview_url: string,
  id: string,
};

Track.defaultProps = {
  name: "",
  album: { images: [{}, { url: "" }], name: "" },
  artist: [{ name: "" }],
  preview_url: "",
  id: "",
};

export default Track;
