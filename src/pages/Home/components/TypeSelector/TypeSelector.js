import React from "react";
import { func, string } from "prop-types";
import Select from "components/Select";

const options = [
  { value: "artists", label: "Artists" },
  { value: "tracks", label: "Tracks" },
];

const TypeSelector = ({ handleChange, value }) => (
  <Select handleChange={handleChange} currValue={value} options={options} />
);

TypeSelector.propTypes = {
  handleType: func.isRequired,
  type: string,
};

TypeSelector.defaultProps = {
  type: "artists",
};

export default TypeSelector;
