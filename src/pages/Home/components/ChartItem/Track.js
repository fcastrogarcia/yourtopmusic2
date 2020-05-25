import React, { Fragment } from "react";
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
import usePlayTrack from "../../hooks/usePlayTrack";

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
  const { ref, handlePlay, handlePause, isPlaying } = usePlayTrack(id);

  const src = album.images[1].url;
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
            <Player
              isPlaying={isPlaying}
              id={id}
              src={preview_url}
              play={preview_url && handlePlay}
              pause={handlePause}
            />
          </styles.Player>
        </Fragment>
      )}
      <audio ref={ref} src={preview_url} preload="none" />
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
