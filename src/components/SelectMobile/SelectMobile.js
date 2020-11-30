import React, { useState } from "react";
import { string, func, shape } from "prop-types";
import styles from "./styles";
import Drawer from "material/Drawer";

const SelectMobile = ({ value, handleChange, options }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);
  const handleClose = () => setOpen(false);
  const handleTransitionEnd = e => e.pseudoElement === "::after" && handleClose();
  const handleOption = value => () => handleChange(value);

  const { label } = options.find(({ value: optionValue }) => optionValue === value) || {};
  const currIndex = options.findIndex(option => option.value === value);

  return (
    <>
      <styles.SelectButton onClick={handleClick}>
        {label}
        <styles.Dropwdown />
      </styles.SelectButton>
      <Drawer open={open} anchor="bottom">
        <styles.Wrapper>
          <styles.CloseBar onClick={handleClose} />
          <styles.Selector index={currIndex} onTransitionEnd={handleTransitionEnd}>
            {options.map(({ value: currValue, label }) => (
              <styles.Option
                onClick={handleOption(currValue)}
                selected={value === currValue}
              >
                {label}
              </styles.Option>
            ))}
          </styles.Selector>
        </styles.Wrapper>
      </Drawer>
    </>
  );
};

SelectMobile.propTypes = {
  value: string,
  handleChange: func,
  options: shape([]),
};

SelectMobile.propTypes = {
  value: "",
  handleChange: () => {},
  options: [],
};

export default SelectMobile;
