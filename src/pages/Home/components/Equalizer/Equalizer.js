import React from "react";
import styles from "./styles";
import times from "lodash/times";

const Equalizer = () => (
  <styles.Container>
    {times(20, (i) => (
      <styles.Column key={i.toString()}>
        <styles.Bar />
      </styles.Column>
    ))}
  </styles.Container>
);

export default Equalizer;
