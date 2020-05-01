import React, { useContext, useState } from "react";
import styles from "./styles";

import Layout from "../../components/Layout";
import Container from "../../components/Container";
import RangeSelector from "./components/RangeSelector";
import TypeSelector from "./components/TypeSelector";
import ChartItem from "./components/ChartItem";

import { Store } from "../../context/Store";
import useFetchData from "../../hooks/useFetchData";

const Home = () => {
  const [tab, setTab] = useState(0);
  const { store, dispatch } = useContext(Store);
  const { isLoading } = useFetchData();
  const { type, artists, tracks } = store;

  const handleType = () => dispatch({ type: "TYPE" });
  const title = `Top ${type === "artists" ? "Artists" : "Tracks"}`;

  return (
    <Layout>
      <Container>
        <styles.Main>
          <styles.Title>{title}</styles.Title>
          <styles.RowWrapper>
            <RangeSelector tab={tab} setTab={setTab} />
            <TypeSelector handleType={handleType} type={type} />
          </styles.RowWrapper>
        </styles.Main>
      </Container>
    </Layout>
  );
};

export default Home;
