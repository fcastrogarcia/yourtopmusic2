import React from "react";
import { func, string } from "prop-types";
import styles from "./styles";

const TypeSelector = ({ handleType, type }) => {
  const options = [
    { value: "artists", label: "Artists" },
    { value: "tracks", label: "Tracks" },
  ];

  const value = options.find(({ value }) => value === type);

  return (
    <styles.Wrapper>
      <styles.Select
        options={options}
        onChange={({ value }) => handleType(value)}
        value={value}
        isSearchable={false}
      />
    </styles.Wrapper>
  );
};

TypeSelector.propTypes = {
  handleType: func.isRequired,
  type: string,
};

TypeSelector.defaultProps = {
  type: "artists",
};

export default TypeSelector;
