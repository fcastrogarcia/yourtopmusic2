import React, { useState, Fragment } from "react";
import {
  any,
  string,
  number,
  objectOf,
  arrayOf,
  shape,
  bool,
} from "prop-types";
import styles from "./styles";

import { isMobile } from "react-device-detect";

import Player from "../Player";

const Track = ({
  name,
  album,
  rank,
  artists,
  preview_url,
  id,
  isLoading,
  mobile,
}) => {
  const [isPlaying, setPlaying] = useState(false);

  const src = album.images[0].url;
  const albumName = album.name;
  const artistName = artists && artists[0].name;

  return (
    <styles.Card isMobile={isMobile} isTrack isPlaying={isPlaying}>
      {isLoading ? (
        <Fragment>
          <styles.SkeletonImage mobile={mobile} />
          <styles.SkeletonArtist />
          <styles.SkeletonTrack />
          <styles.SkeletonAlbum />
        </Fragment>
      ) : (
        <Fragment>
          <styles.Rank>{rank}</styles.Rank>
          <styles.Image src={src} alt={albumName} />
          <styles.Track>{name}</styles.Track>
          <styles.Artist>{artistName}</styles.Artist>
          <styles.Album>{albumName}</styles.Album>
          <styles.Player>
            <Player src={preview_url} {...{ isPlaying, setPlaying, id }} />
          </styles.Player>
        </Fragment>
      )}
    </styles.Card>
  );
};

Track.propTypes = {
  name: string,
  album: objectOf(any),
  rank: number.isRequired,
  artists: arrayOf(shape({ name: "" })),
  preview_url: string,
  id: string,
  isLoading: bool,
  mobile: bool.isRequired,
};

Track.defaultProps = {
  name: "",
  album: { images: [{}, { url: "" }], name: "" },
  artist: [{ name: "" }],
  preview_url: "",
  id: "",
  isLoading: true,
};

export default Track;
