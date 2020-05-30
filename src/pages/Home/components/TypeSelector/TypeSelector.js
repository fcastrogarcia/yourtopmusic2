/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import { func, string } from "prop-types";
import styles from "./styles";

const TypeSelector = ({ handleType, type }) => {
  return (
    <styles.Wrapper>
      <styles.Emoji role="img" aria-label="singer">
        👨‍🎤
      </styles.Emoji>
      <styles.Switch onChange={handleType} checked={type === "tracks"} />
      <styles.Emoji role="img" aria-label="song">
        🎼
      </styles.Emoji>
    </styles.Wrapper>
  );
};

TypeSelector.propTypes = {
  handleType: func.isRequired,
  type: string,
};

TypeSelector.defaultProps = {
  type: "artists",
};

export default TypeSelector;
