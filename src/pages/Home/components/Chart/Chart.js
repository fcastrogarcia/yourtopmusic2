import React from "react";
import { arrayOf, array, number, bool } from "prop-types";
import styles from "./styles";

import { PlayerProdiver } from "context/PlayerContext";

import Artist from "../ChartItem/Artist";
import Track from "../ChartItem/Track";

const Chart = ({ data, range, isArtists }) => {
  const term = data[range];

  return (
    <styles.Wrapper>
      {isArtists ? (
        term.map(({ name, genres, images }, i) => (
          <Artist
            key={i.toString()}
            {...{ name, genres, images }}
            rank={i + 1}
          />
        ))
      ) : (
        <PlayerProdiver>
          {term.map((item, i) => (
            <Track key={i.toString()} {...item} rank={i + 1} />
          ))}
        </PlayerProdiver>
      )}
    </styles.Wrapper>
  );
};

Chart.propTypes = {
  data: arrayOf(array),
  range: number,
  isArtists: bool,
};

Chart.defaultProps = {
  data: [[], [], []],
  range: 0,
  isArtists: true,
};

export default Chart;
