import React, { useContext } from "react";
import { Store } from "../../context/Store";

const Home = () => {
  const store = useContext(Store);

  return (
    <React.Fragment>
      <h3>Home</h3>
    </React.Fragment>
  );
};

export default Home;
