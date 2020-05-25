import React, { Fragment } from "react";
import { arrayOf, object, string, number, bool } from "prop-types";
import styles from "./styles";
import Lazy from "react-lazyload";

import { isMobile } from "react-device-detect";
import useDevices from "hooks/useDevices";

const Artist = ({ name, genres, images, rank, isLoading }) => {
  const { mobile } = useDevices();

  const src = images[1].url;
  const _genres = (isMobile ? genres.slice(0, 3) : genres).join(", ");

  return (
    <styles.Card isMobile={isMobile}>
      {isLoading ? (
        <Fragment>
          <styles.SkeletonImage mobile={mobile} />
          <styles.SkeletonName />
          <styles.SkeletonGenres />
        </Fragment>
      ) : (
        <Fragment>
          <styles.Rank>{rank}</styles.Rank>
          <Lazy once>
            <styles.Image src={src} alt={name} />
          </Lazy>
          <styles.Name>{name}</styles.Name>
          <styles.Genres>{_genres}</styles.Genres>
        </Fragment>
      )}
    </styles.Card>
  );
};

Artist.propTypes = {
  name: string,
  genres: arrayOf(string),
  images: arrayOf(object),
  rank: number.isRequired,
  isLoading: bool,
  mobile: bool.isRequired,
};

Artist.defaultProps = {
  name: "",
  genres: [""],
  images: Array(2).fill({ url: "" }),
  isLoading: true,
};

export default Artist;
