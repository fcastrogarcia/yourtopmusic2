import React from "react";
import { bool, string, func, shape } from "prop-types";
import styles from "./styles";

const Avatar = ({ image, isLoading, firstLetter, handleMenu }) => {
  const src = image.url;

  return (
    <styles.IconButton size="medium" onClick={handleMenu}>
      {isLoading || !src ? (
        <styles.Skeleton />
      ) : (
        <styles.Avatar src={src}>{firstLetter}</styles.Avatar>
      )}
    </styles.IconButton>
  );
};

Avatar.propTypes = {
  isLoading: bool.isRequired,
  image: shape({ url: string }),
  firstLetter: string,
  handleMenu: func,
};
Avatar.defaultProps = {
  firstLetter: "",
  image: { url: "" },
  handleMenu: () => {},
};

export default Avatar;
