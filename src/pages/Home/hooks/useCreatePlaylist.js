import { useState, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { Store } from "context/Store";
import Playlist from "utils/playlist";

const initialState = {
  loading: false,
  error: null,
  success: false,
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

  const getDispatcher = type => payload => dispatch({ type, payload });

  const handleSuccess = payload => getDispatcher("SUCCESS")(payload);
  const handleError = getDispatcher("ERROR");
  const handleInit = getDispatcher("INIT");
  const handleDefault = getDispatcher("RESET");

  useEffect(() => {
    (async function () {
      if (!store.user.id || !loading) return;

      try {
        const userEndpoint = Playlist.userEndpoint(store.user.id);
        const body = Playlist.getBody(range);

        const { data } = await axios.post(userEndpoint, body);

        const uris = Playlist.getUris(store.tracks[range]);
        const getEndpoint = slug => Playlist.playlistEndpoint(data.id, slug);

        await axios.post(getEndpoint("tracks"), uris);

        const { data: cover } = await axios.get(getEndpoint("images"));

        handleSuccess({
          src: data.external_urls.spotify,
          cover: cover[0].url,
        });
      } catch (error) {
        console.error(error);
        handleError();
      }
    })();
  }, [store, loading, range]);

  return { range, setRange, state, handleInit, handleDefault };
};

export default useCreatePlaylist;
