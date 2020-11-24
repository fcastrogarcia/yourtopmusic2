import React from "react";
import styles from "./styles";

const ranges = [{ label: "All time" }, { label: "Six Months" }, { label: "Last Month" }];

const getProps = tab => index => ({
  id: `simple-tab-${index}`,
  "aria-controls": `simple-tabpanel-${index}`,
  selected: tab === index,
});

const RangeSelectorDesktop = ({ tab, handleChange }) => {
  const props = getProps(tab);
  return (
    <styles.Wrapper>
      {ranges.map(({ label }, index) => (
        <styles.RangeOption onClick={handleChange(index)} {...props(index)}>
          {label}
        </styles.RangeOption>
      ))}
    </styles.Wrapper>
  );
};

export default RangeSelectorDesktop;
