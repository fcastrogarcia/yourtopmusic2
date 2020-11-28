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
  const data = isArtists ? artists : tracks;

  return (
    <Layout>
      <styles.MainThread>
        <Chart {...{ isArtists, isLoading }} term={data[tab]} />
        {/* {!tablet && <Footer />} */}
      </styles.MainThread>
      {!tablet && (
        <styles.Sidebar>
          <styles.Wrapper>
            <TypeSelector handleType={handleType} type={type} />
            <RangeSelectorDesktop tab={tab} handleChange={handleTab} />
            <Playlist />
          </styles.Wrapper>
        </styles.Sidebar>
      )}
      {tablet && (
        <styles.BottomWrapper isAtBottom={isAtBottom}>
          <RangeSelectorMobile tab={tab} handleChange={handleTab} />
          <Footer />
        </styles.BottomWrapper>
      )}
    </Layout>
  );
};

export default Home;
