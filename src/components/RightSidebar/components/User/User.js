import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { arrayOf, string, object, objectOf } from "prop-types";
import { ClickAwayListener } from "material";
import { Store } from "context/Store";
import styles from "./styles";
import Avatar from "../Avatar";
import { FaOpenid } from "react-icons/fa";

const User = ({ externalUrl, displayName, images }) => {
  const [open, setOpen] = useState(false);
  const { isLoading } = useContext(Store);
  const history = useHistory();

  const [image] = images || [];
  const { spotify: url } = externalUrl || {};
  const [fisrtChar] = displayName || "";

  const handleMenu = () => setOpen(!open);

  const handleClose = () => setOpen(false);

  console.log(open);

  const handleSignOut = () => {
    handleClose();
    window.localStorage.removeItem("t");
    history.push("/");
  };

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <styles.Wrapper>
        <styles.User onClick={handleMenu} open={open}>
          {isLoading || !displayName ? (
            <styles.Skeleton width={120} height={15} variant="text" />
          ) : (
            <styles.DisplayName>{displayName}</styles.DisplayName>
          )}
          <Avatar image={image} fisrtChar={fisrtChar} isLoading={isLoading} />
        </styles.User>
        {open && (
          <styles.Menu>
            <styles.MenuItem onClick={handleClose}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                My Account
              </a>
            </styles.MenuItem>
            <styles.MenuItem onClick={handleSignOut}>Sign out</styles.MenuItem>
          </styles.Menu>
        )}
      </styles.Wrapper>
    </ClickAwayListener>
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
