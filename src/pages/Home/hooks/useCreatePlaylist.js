import { useState, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { Store } from "context/Store";
import Playlist from "../utils/playlist";

const initialState = {
  loading: false,
  error: null,
  success: null,
  playlist: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT":
      return {
        loading: true,
        error: null,
        success: null,
        playlist: {},
      };
    case "SUCCESS":
      return {
        loading: false,
        error: false,
        success: true,
        playlist: action.payload,
      };
    case "ERROR":
      return {
        ...state,
        success: false,
        loading: false,
        error: true,
      };
    case "RESET":
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

const useCreatePlaylist = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [range, setRange] = useState(0);
  const { store } = useContext(Store);

  const { loading } = state;

  const handleSuccess = (payload) => dispatch({ type: "SUCCESS", payload });
  const handleError = () => dispatch({ type: "ERROR" });
  const handleInit = () => dispatch({ type: "INIT" });
  const handleDefault = () => dispatch({ type: "RESET" });

  useEffect(() => {
    (async function () {
      if (!store.user.id || !loading) return;

      const userEndpoint = Playlist.userEndpoint(store.user.id);
      const body = Playlist.getBody(range);
      const uris = Playlist.getUris(store.tracks[range]);
      const getEndpoint = (slug) => Playlist.playlistEndpoint(data.id, slug);

      const { data } = await axios.post(userEndpoint, body).catch(handleError);

      await axios.post(getEndpoint("tracks"), uris).catch(handleError);

      const { data: cover } = await axios.get(getEndpoint("images"));

      handleSuccess({
        src: data.external_urls.spotify,
        cover: cover[0].url,
      });
    })();
  }, [store, loading, range]);

  return { range, setRange, state, handleInit, handleDefault };
};

export default useCreatePlaylist;
