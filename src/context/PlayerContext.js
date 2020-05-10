import React, { createContext, useState } from "react";

export const PlayerContext = createContext();

export const PlayerProdiver = ({ children }) => {
  const [id, setId] = useState("");

  const value = {
    id,
    setId,
  };

  return (
    <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
  );
};
