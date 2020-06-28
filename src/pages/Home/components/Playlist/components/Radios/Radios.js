import React from "react";
import { number } from "prop-types";
import styles from "./styles";

const radios = [
  {
    value: 0,
    label: "All Time",
  },
  {
    value: 1,
    label: "Six Months",
  },
  {
    value: 2,
    label: "Last Month",
  },
];

const Radios = ({ range }) =>
  radios.map(({ value, label }, i) => (
    <styles.FormControlLabel
      value={value}
      control={<styles.Radio />}
      label={label}
      selected={range === value}
    />
  ));

Radios.propTypes = {
  range: number,
};

Radios.defaultProps = {
  range: 0,
};

export default Radios;
