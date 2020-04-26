import React, { useContext } from "react";

import Layout from "../../components/Layout";

import { Store } from "../../context/Store";
import useFetchData from "../../hooks/useFetchData";

const Home = () => {
  const { store } = useContext(Store);
  const { isLoading } = useFetchData();

  return (
    <Layout>
      <h3>Home</h3>
    </Layout>
  );
};

export default Home;
