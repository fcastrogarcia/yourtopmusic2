import React from "react";
import { bool, string, shape } from "prop-types";
import styles from "./styles";

const Content = ({ src, firstChar }) =>
  src ? (
    <styles.Avatar src={src}>{firstChar}</styles.Avatar>
  ) : (
    <styles.UserCircle size={32} />
  );

const Avatar = ({ image, isLoading, firstChar }) => {
  const src = image?.url;

  return (
    <styles.IconButton size="medium">
      {isLoading ? <styles.Skeleton /> : <Content src={src} firstChar={firstChar} />}
    </styles.IconButton>
  );
};

Avatar.propTypes = {
  isLoading: bool.isRequired,
  image: shape({ url: string }),
  firstChar: string,
};
Avatar.defaultProps = {
  firstChar: "",
  image: { url: "" },
};

export default Avatar;
