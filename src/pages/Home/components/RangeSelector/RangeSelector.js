import React, { useState } from "react";
import styles from "./styles";

const RangeSelector = () => {
  const [tab, setTab] = useState(0);

  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  const handleChange = (_, newValue) => setTab(newValue);

  return (
    <styles.Wrapper>
      <styles.Tabs value={tab} onChange={handleChange}>
        <styles.Tab label="All Time" {...a11yProps(0)} />
        <styles.Tab label="Six Months" {...a11yProps(1)} />
        <styles.Tab label="Last Month" {...a11yProps(2)} />
      </styles.Tabs>
      <styles.Line>asaafasfasf</styles.Line>
    </styles.Wrapper>
  );
};

export default RangeSelector;
