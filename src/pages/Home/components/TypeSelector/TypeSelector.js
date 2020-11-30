import React from "react";
import { bool, shape, func, string } from "prop-types";
import Select from "components/Select";
import SelectMobile from "components/SelectMobile";

const TypeSelector = ({ isTablet, ...rest }) => {
  const Selector = isTablet ? SelectMobile : Select;
  return <Selector {...rest} />;
};

TypeSelector.propTypes = {
  isTablet: bool,
  value: string,
  handleChange: func,
  options: shape([]),
};

TypeSelector.defaultProps = {
  isTablet: false,
  value: "artists",
  handleChange: () => {},
  options: [
    { value: "artists", label: "Artists" },
    { value: "tracks", label: "Tracks" },
  ],
};

export default TypeSelector;
