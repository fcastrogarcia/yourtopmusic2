import React from "react";
import { bool, shape } from "prop-types";
import Select from "components/Select";
import SelectMobile from "components/SelectMobile";

const TypeSelector = ({ isTablet, ...rest }) => {
  return isTablet ? <SelectMobile {...rest} /> : <Select {...rest} />;
};

TypeSelector.propTypes = {
  isTablet: bool,
  options: shape([]),
};

TypeSelector.defaultProps = {
  isTablet: false,
  options: [
    { value: "artists", label: "Artists" },
    { value: "tracks", label: "Tracks" },
  ],
};

export default TypeSelector;
