import React from "react";
import { arrayOf, array, number, bool } from "prop-types";
import styles from "./styles";

import Artist from "../ChartItem/Artist";
import Track from "../ChartItem/Track";

const Chart = ({ data, range, isArtists }) => {
  console.log(data);
  const term = data[range];

  return (
    <div>
      {isArtists
        ? term.map(({ name, genres, images }, i) => (
            <Artist key={i.toString()} {...{ name, genres, images }} />
          ))
        : term.map((item, i) => <Track key={i.toString()} />)}
    </div>
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
