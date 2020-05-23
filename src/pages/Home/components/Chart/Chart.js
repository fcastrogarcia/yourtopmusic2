import React from "react";
import { arrayOf, array, number, bool } from "prop-types";
import styles from "./styles";

import { PlayerProdiver } from "context/PlayerContext";
import useDevices from "hooks/useDevices";

import Artist from "../ChartItem/Artist";
import Track from "../ChartItem/Track";

const Chart = ({ term, isArtists, isLoading }) => {
  const { mobile } = useDevices();

  return (
    <styles.Wrapper>
      {isArtists ? (
        term.map(({ name, genres, images }, i) => (
          <Artist
            key={i.toString()}
            {...{ name, genres, images }}
            rank={i + 1}
            isLoading={isLoading}
            mobile={mobile}
          />
        ))
      ) : (
        <PlayerProdiver>
          {term.map((item, i) => (
            <Track
              key={i.toString()}
              {...item}
              rank={i + 1}
              isLoading={isLoading}
              mobile={mobile}
            />
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
  isLoading: bool,
};

Chart.defaultProps = {
  data: [[], [], []],
  range: 0,
  isArtists: true,
  isLoading: true,
};

export default Chart;
