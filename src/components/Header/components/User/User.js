import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { arrayOf, string, object, objectOf, bool } from "prop-types";
import { ClickAwayListener } from "material";
import { Store } from "context/Store";
import styles from "./styles";
import Avatar from "../Avatar";

const Menu = ({ handleClose, url }) => {
  const history = useHistory();

  const handleClick = () => {
    handleClose();
    window.localStorage.removeItem("t");
    history.push("/");
  };

  return (
    <styles.Menu>
      <styles.MenuItem onClick={handleClose}>
        <a href={url} target="_blank" rel="noopener noreferrer">
          My Account
        </a>
      </styles.MenuItem>
      <styles.MenuItem onClick={handleClick}>Sign out</styles.MenuItem>
    </styles.Menu>
  );
};

const User = ({ externalUrl, displayName, images, isTablet }) => {
  const [open, setOpen] = useState(false);
  const { isLoading } = useContext(Store);

  const [image] = images || [];
  const { spotify: url } = externalUrl || {};
  const [fisrtChar] = displayName || "";

  const handleMenu = () => setOpen(!open);
  const handleClose = () => setOpen(false);

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <styles.Wrapper>
        <styles.User onClick={handleMenu} open={open}>
          {isLoading || !displayName ? (
            <styles.Skeleton width={120} height={15} variant="text" />
          ) : (
            <React.Fragment>
              {!isTablet && <styles.DisplayName>{displayName}</styles.DisplayName>}
            </React.Fragment>
          )}
          <Avatar image={image} fisrtChar={fisrtChar} isLoading={isLoading} />
        </styles.User>
        {open && <Menu handleClose={handleClose} url={url} />}
      </styles.Wrapper>
    </ClickAwayListener>
  );
};

User.propTypes = {
  externalUrl: objectOf(string),
  displayName: string,
  images: arrayOf(object),
  isTablet: bool,
};

User.defaultProps = {
  externalUrl: { spotify: "" },
  displayName: "",
  images: [],
  isTablet: false,
};

export default User;
