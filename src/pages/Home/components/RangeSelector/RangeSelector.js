import React from "react";
import { func, number } from "prop-types";
import styles from "./styles";

const RangeSelector = ({ tab, handleChange }) => {
  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  return (
    <styles.Tabs value={tab} onChange={handleChange}>
      <styles.Tab label="All Time" {...a11yProps(0)} />
      <styles.Tab label="Six Months" {...a11yProps(1)} />
      <styles.Tab label="Last Month" {...a11yProps(2)} />
    </styles.Tabs>
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
