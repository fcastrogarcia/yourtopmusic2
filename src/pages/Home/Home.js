import React, { useContext, useState } from "react";
import styles from "./styles";

import Layout from "components/Layout";
import Container from "components/Container";
import RangeSelector from "./components/RangeSelector";
import TypeSelector from "./components/TypeSelector";
import Chart from "./components/Chart";

import { Store } from "context/Store";
import useSticky from "hooks/useSticky";

const Home = () => {
  const [tab, setTab] = useState(0);
  const { store, dispatch, isLoading } = useContext(Store);
  const { sticky } = useSticky(84);

  const handleType = () => dispatch({ type: "TYPE" });

  const { type, artists, tracks } = store;
  const isArtists = type === "artists";
  const title = `Top ${isArtists ? "Artists" : "Tracks"}`;
  const data = isArtists ? artists : tracks;

  return (
    <Layout>
      <Container>
        <styles.Main>
          <styles.Header sticky={sticky}>
            <styles.Title sticky={sticky}>{title}</styles.Title>
            <styles.RowWrapper>
              <RangeSelector tab={tab} setTab={setTab} />
              <TypeSelector handleType={handleType} type={type} />
            </styles.RowWrapper>
          </styles.Header>
          <Chart {...{ data, isArtists, isLoading }} range={tab} />
        </styles.Main>
      </Container>
    </Layout>
  );
};

export default Home;
