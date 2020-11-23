import React from "react";
import styles from "./styles";

const a11yProps = index => ({
  id: `simple-tab-${index}`,
  "aria-controls": `simple-tabpanel-${index}`,
});

const RangeSelectorDesktop = ({ tab, handleChange }) => (
  <styles.Tabs value={tab} onChange={handleChange}>
    <styles.Tab label="All Time" {...a11yProps(0)} />
    <styles.Tab label="Six Months" {...a11yProps(1)} />
    <styles.Tab label="Last Month" {...a11yProps(2)} />
  </styles.Tabs>
);

export default RangeSelectorDesktop;
