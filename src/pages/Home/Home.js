import React, { useContext } from "react";
import styles from "./styles";

import Layout from "components/Layout";
import Footer from "components/Footer";
import { RangeSelectorMobile, RangeSelectorDesktop } from "./components/RangeSelector";
import TypeSelector from "./components/TypeSelector";
import Chart from "./components/Chart";
import Playlist from "./components/Playlist";

import { Store } from "context/Store";
import useScroll from "hooks/useScroll";
import useDevices from "hooks/useDevices";
import useQuery from "./hooks/useQuery";

const Home = () => {
  const { store, isLoading } = useContext(Store);
  const { sticky, isAtBottom } = useScroll(84);
  const { handleType, handleTab, type, tab } = useQuery();
  const { tablet } = useDevices();

  const { artists, tracks } = store;
  const isArtists = type === "artists";
  // const title = `Top ${isArtists ? "Artists" : "Tracks"}`;
  const data = isArtists ? artists : tracks;

  return (
    <Layout>
      <styles.Sidebar1>
        <styles.Wrapper>
          <TypeSelector handleType={handleType} type={type} />
          <RangeSelectorDesktop tab={tab} handleChange={handleTab} />
        </styles.Wrapper>
      </styles.Sidebar1>
      <styles.MainThread>
        {/* <styles.Header sticky={sticky}>
          <styles.Title sticky={sticky}>{title}</styles.Title>
          <styles.Controls>
            <Playlist />
          </styles.Controls>
        </styles.Header> */}
        <Chart {...{ isArtists, isLoading }} term={data[tab]} />
      </styles.MainThread>
      {tablet && (
        <styles.BottomWrapper isAtBottom={isAtBottom}>
          <RangeSelectorMobile tab={tab} handleChange={handleTab} />
          <Footer />
        </styles.BottomWrapper>
      )}
      {/* {!tablet && <Footer />} */}
    </Layout>
  );
};

export default Home;
