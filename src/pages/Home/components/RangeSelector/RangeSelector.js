import React from "react";
import { func, number } from "prop-types";
import { getProps } from "utils";
import styles from "./styles";
import ranges from "./ranges.json";

const RangeSelector = ({ tab, handleChange, isTablet }) => {
  const props = getProps(tab);

  const { WrapperDesktop, WrapperMobile, RangeOptionMobile, RangeOption } = styles;
  const Wrapper = isTablet ? WrapperMobile : WrapperDesktop;
  const Option = isTablet ? RangeOptionMobile : RangeOption;

  return (
    <Wrapper tab={tab}>
      {ranges.map(({ label }, index) => (
        <Option onClick={handleChange(index)} {...props(index)}>
          {label}
        </Option>
      ))}
    </Wrapper>
  );
};

RangeSelector.propTypes = {
  tab: number,
  handleChange: func.isRequired,
};

RangeSelector.defaulProps = {
  tab: 0,
};

export default RangeSelector;
