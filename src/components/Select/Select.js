import React from "react";
import { func, string, shape } from "prop-types";
import styles from "./styles";

const Select = ({ options, handleChange, currValue, rest }) => {
  const value = options.find(({ value }) => value === currValue);
  return (
    <styles.Wrapper {...rest}>
      <styles.Select
        options={options}
        onChange={({ value }) => handleChange(value)}
        value={value}
        isSearchable={false}
      />
    </styles.Wrapper>
  );
};

Select.propTypes = {
  options: shape([]),
  handleType: func.isRequired,
  type: string,
};

Select.defaultProps = {
  type: "artists",
};

export default Select;
