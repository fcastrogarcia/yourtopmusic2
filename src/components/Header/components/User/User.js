import React, { useState } from "react";
import { arrayOf, string, object, objectOf } from "prop-types";
import styles from "./styles";

const User = ({ externalUrl, displayName, image }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const src = image[0].url;
  const url = externalUrl.spotify;

  const handleMenu = (event) => setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  return (
    <styles.User>
      <styles.DisplayName>{displayName}</styles.DisplayName>
      <div>
        <styles.IconButton size="medium" onClick={handleMenu}>
          {src && <styles.Image src={src} />}
        </styles.IconButton>
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
      </div>
    </styles.User>
  );
};

User.propTypes = {
  externalUrl: objectOf(string),
  displayName: string,
  image: arrayOf(object),
};

User.defaultProps = {
  externalUrl: { spotify: "" },
  displayName: "",
  image: [{ url: "" }],
};

export default User;
