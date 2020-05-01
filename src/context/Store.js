import React, { createContext, useMemo, useReducer, useState } from "react";
import { setAxiosHeader } from "../utils/axios";

export const Store = createContext();

const initialState = {
  user: {},
  artists: [[], [], []],
  tracks: [[], [], []],
  type: "artists",
  token_expired: false,
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "API":
      return payload.reduce((acc, curr, i) => {
        switch (i) {
          case 0:
            return { ...acc, user: curr };
          case 1:
          case 2:
          case 3:
            acc.artists[i - 1] = curr;
            return {
              ...acc,
              artists: acc.artists,
            };
          case 4:
          case 5:
          case 6:
            acc.tracks[i - 4] = curr;
            return {
              ...acc,
              tracks: acc.tracks,
            };
          default:
            return acc;
        }
      }, state);
    case "TYPE":
      return {
        ...state,
        type: state.type === "artists" ? "tracks" : "artists",
      };
    case "ERROR":
      return {
        ...state,
        token_expired: action.payload,
      };
    default:
      return state;
  }
};

export function StoreProvider(props) {
  const [store, dispatch] = useReducer(reducer, initialState);
  const [token, setToken] = useState(() => {
    const t = window.localStorage.getItem("t") || "";
    t && setAxiosHeader(t);
    return t;
  });

  const value = useMemo(() => {
    return {
      store,
      dispatch,
      token,
      setToken,
    };
  }, [store, token]);

  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
