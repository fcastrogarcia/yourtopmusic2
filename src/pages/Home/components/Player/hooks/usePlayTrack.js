import { useEffect, useRef, useContext, useState } from "react";

import { PlayerContext } from "context/PlayerContext";

const usePlayTrack = (id) => {
  const [isPlaying, setPlaying] = useState(false);
  const { id: globalId, setId } = useContext(PlayerContext);
  const track = useRef();

  const isCurrentTrack = globalId === id;

  const handlePlay = () => {
    setId(id);
    setPlaying(true);
    track.current.play();
  };

  const handlePause = () => {
    setPlaying(false);
    track.current.currentTime = 0;
    track.current.pause();
  };

  useEffect(() => {
    if (!isCurrentTrack) handlePause();
  }, [isCurrentTrack]);

  useEffect(() => {
    const _track = track.current;

    _track.addEventListener("ended", handlePause);
    _track.addEventListener("pause", handlePause);
    _track.addEventListener("playing", () => setPlaying(true));

    return () => {
      _track.removeEventListener("ended", handlePause);
      _track.removeEventListener("pause", handlePause);
      _track.removeEventListener("playing", () => setPlaying(true));
    };
  });

  return { track, handlePlay, handlePause, isPlaying };
};

export default usePlayTrack;
