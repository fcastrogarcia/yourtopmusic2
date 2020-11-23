import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { arrayOf, string, object, objectOf } from "prop-types";
import { Store } from "context/Store";
import styles from "./styles";
import Avatar from "../Avatar";

const User = ({ externalUrl, displayName, images }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { isLoading } = useContext(Store);
  const history = useHistory();

  const [image] = images || [];
  const { spotify: url } = externalUrl || {};
  const [fisrtChar] = displayName || "";

  const handleMenu = event => setAnchorEl(event.currentTarget);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    handleClose();
    window.localStorage.removeItem("t");
    history.push("/");
  };

  return (
    <>
      <styles.User onClick={handleMenu}>
        {isLoading || !displayName ? (
          <styles.Skeleton width={120} height={15} variant="text" />
        ) : (
          <styles.DisplayName>{displayName}</styles.DisplayName>
        )}
        <Avatar image={image} fisrtChar={fisrtChar} isLoading={isLoading} />
      </styles.User>
      {!isLoading && (
        <styles.Menu
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={handleClose}
          keepMounted
        >
          <styles.MenuItem onClick={handleClose}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <styles.ItemText>My Account</styles.ItemText>
            </a>
          </styles.MenuItem>
          <styles.MenuItem onClick={handleSignOut}>
            <styles.ItemText>Sign out</styles.ItemText>
          </styles.MenuItem>
        </styles.Menu>
      )}
    </>
  );
};

User.propTypes = {
  externalUrl: objectOf(string),
  displayName: string,
  images: arrayOf(object),
};

User.defaultProps = {
  externalUrl: { spotify: "" },
  displayName: "",
  images: [],
};

export default User;
