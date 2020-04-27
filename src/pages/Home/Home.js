import React, { useContext } from "react";
import styles from "./styles";

import Layout from "../../components/Layout";
import Container from "../../components/Container";
import RangeSelector from "./components/RangeSelector";

import { Store } from "../../context/Store";
import useFetchData from "../../hooks/useFetchData";

const Home = () => {
  const { store } = useContext(Store);
  const { isLoading } = useFetchData();

  const { type } = store;
  console.log(store);

  const title = `Top ${type === "artists" ? "Artists" : "Tracks"}`;

  return (
    <Layout>
      <Container>
        <styles.Main>
          <styles.Title>{title}</styles.Title>
          <RangeSelector />
        </styles.Main>
      </Container>
    </Layout>
  );
};

export default Home;
