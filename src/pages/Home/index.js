import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { Store } from "../../context/Store";
import useParseToken from "../../hooks/useParseToken";
import Home from "./Home";

const AuthenticatedHome = () => {
  const { token_expired } = useContext(Store);
  const { unauthorized } = useParseToken();

  return unauthorized || token_expired ? <Redirect to="/connect" /> : <Home />;
};

export default AuthenticatedHome;
