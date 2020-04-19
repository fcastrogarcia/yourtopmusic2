import { useState, useEffect, useContext } from "react";
import { Store } from "../context/Store";
import endpoints from "../utils/endpoints";
import axios from "axios";

export default () => {
  //Context
  const { token, dispatch } = useContext(Store);
  //local state
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (token) {
        const apiRes = await Promise.all(
          endpoints.map((endpoint) =>
            axios.get(`https://api.spotify.com/v1/me${endpoint}`)
          )
        ).catch(() => dispatch({ type: "ERROR", payload: true }));
        if (apiRes) {
          const res = apiRes.map((res, index) =>
            index === 0 ? res.data : res.data.items
          );
          dispatch({
            type: "DATA",
            payload: {
              userData: res[0],
              artists: {
                short_term: res[1],
                medium_term: res[2],
                long_term: res[3],
              },
              tracks: {
                short_term: res[4],
                medium_term: res[5],
                long_term: res[6],
              },
            },
          });
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
