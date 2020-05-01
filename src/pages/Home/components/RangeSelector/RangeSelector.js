import React, { useState } from "react";
import { func, number } from "prop-types";
import styles from "./styles";

const RangeSelector = ({ tab, setTab }) => {
  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  const handleChange = (_, newValue) => setTab(newValue);

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
  setTab: func.isRequired,
};

RangeSelector.defaulProps = {
  tab: 0,
};

export default RangeSelector;
