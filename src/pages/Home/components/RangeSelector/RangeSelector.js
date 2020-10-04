import React from "react";
import { func, number } from "prop-types";
import styles from "./styles";

const a11yProps = index => ({
  id: `simple-tab-${index}`,
  "aria-controls": `simple-tabpanel-${index}`,
});

const RangeSelector = ({ tab, handleChange, rest }) => (
  <styles.Tabs value={tab} onChange={handleChange} {...rest}>
    <styles.Tab label="All Time" {...a11yProps(0)} />
    <styles.Tab label="Six Months" {...a11yProps(1)} />
    <styles.Tab label="Last Month" {...a11yProps(2)} />
  </styles.Tabs>
);

RangeSelector.propTypes = {
  tab: number,
  handleChange: func.isRequired,
};

RangeSelector.defaulProps = {
  tab: 0,
};

export default RangeSelector;
