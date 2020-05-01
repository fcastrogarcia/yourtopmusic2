import { useEffect, useState, useContext } from "react";
import { setAxiosHeader } from "../utils/axios";
import { useHistory, useLocation } from "react-router-dom";
import { Store } from "../context/Store";
import queryString from "query-string";

export default function useParseToken() {
  const { token, setToken } = useContext(Store);
  const [unauthorized, setUnauthorized] = useState(false);
  const history = useHistory();
  const location = useLocation();

  const { access_token: t } = queryString.parse(location.search);

  useEffect(() => {
    (function getToken() {
      if (t) {
        window.localStorage.setItem("t", t);
        setToken(t);
        setAxiosHeader(t);
        history.push({ search: "" });
      } else if (!t && !token) {
        setUnauthorized(true);
      }
    })();
  });

  return { unauthorized };
}
