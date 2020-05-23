import React, { useState, useContext } from "react";
import { arrayOf, string, object, objectOf } from "prop-types";
import { Store } from "context/Store";
import styles from "./styles";
import Avatar from "../Avatar";

const User = ({ externalUrl, displayName, images }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { isLoading } = useContext(Store);

  const image = images[0];
  const url = externalUrl.spotify;
  const firstLetter = displayName && displayName[0];

  const handleMenu = (event) => setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  return (
    <styles.User>
      {isLoading || !displayName ? (
        <styles.Skeleton width={120} height={15} variant="text" />
      ) : (
        <styles.DisplayName>{displayName}</styles.DisplayName>
      )}
      <div>
        <Avatar
          image={image}
          firstLetter={firstLetter}
          isLoading={isLoading}
          handleMenu={handleMenu}
        />
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
            <styles.MenuItem onClick={handleClose}>
              <styles.ItemText>Sign out</styles.ItemText>
            </styles.MenuItem>
          </styles.Menu>
        )}
      </div>
    </styles.User>
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
