import React, { useContext } from "react";
import styles from "./styles";

import Layout from "components/Layout";
import Container from "components/Container";
import RangeSelector from "./components/RangeSelector";
import TypeSelector from "./components/TypeSelector";
import Chart from "./components/Chart";
import Playlist from "./components/Playlist";

import { Store } from "context/Store";
import useSticky from "hooks/useSticky";
import useQuery from "./hooks/useQuery";

const Home = () => {
  const { store, isLoading } = useContext(Store);
  const { sticky } = useSticky(84);
  const { handleType, handleTab, type, tab } = useQuery();

  const { artists, tracks } = store;
  const isArtists = type === "artists";
  const title = `Top ${isArtists ? "Artists" : "Tracks"}`;
  const data = isArtists ? artists : tracks;

  return (
    <Layout>
      <Container>
        <styles.Main>
          <styles.Header sticky={sticky}>
            <styles.Title sticky={sticky}>{title}</styles.Title>
            <styles.Controls>
              <RangeSelector tab={tab} handleChange={handleTab} />
              <TypeSelector handleType={handleType} type={type} />
              <Playlist />
            </styles.Controls>
          </styles.Header>
          <Chart {...{ isArtists, isLoading }} term={data[tab]} />
        </styles.Main>
      </Container>
    </Layout>
  );
};

export default Home;
