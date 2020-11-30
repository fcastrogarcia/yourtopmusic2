import React from "react";
import { func, string, shape } from "prop-types";
import styles from "./styles";

const Select = ({ options, handleChange, value, rest }) => {
  const selectedOption = options.find(({ value: currValue }) => currValue === value);
  return (
    <styles.Wrapper {...rest}>
      <styles.Select
        options={options}
        onChange={({ value }) => handleChange(value)}
        value={selectedOption}
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
