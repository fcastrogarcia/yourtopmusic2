import { useState, useEffect, useContext } from "react";
import { Store } from "../context/Store";
import endpoints from "../utils/endpoints";
import axios from "axios";

export default () => {
  const { token, dispatch } = useContext(Store);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (token) {
        const res = await Promise.all(
          endpoints.map((endpoint) =>
            axios.get(`https://api.spotify.com/v1/me${endpoint}`)
          )
        ).catch(() => dispatch({ type: "ERROR", payload: true }));

        if (res) {
          const payload = res.map((res, i) =>
            i === 0 ? res.data : res.data.items
          );

          dispatch({ type: "API", payload });
        }

        setIsLoading(false);
      }
    };
    fetchData();
  }, [dispatch, token]);

  const state = {
    isLoading,
  };

  return state;
};
