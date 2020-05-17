import { useEffect, useRef, useContext } from "react";

import { PlayerContext } from "context/PlayerContext";

const usePlayTrack = (id, setPlaying) => {
  const { id: globalId, setId } = useContext(PlayerContext);
  const ref = useRef();

  const isCurrentTrack = globalId === id;

  const handlePlay = () => {
    setId(id);
    setPlaying(true);
    ref.current.play();
  };

  const handlePause = () => {
    setPlaying(false);
    ref.current.currentTime = 0;
    ref.current.pause();
  };

  useEffect(() => {
    if (!isCurrentTrack) handlePause();
  }, [isCurrentTrack]);

  useEffect(() => {
    const track = ref.current;

    track.addEventListener("ended", handlePause);
    track.addEventListener("pause", handlePause);
    track.addEventListener("playing", () => setPlaying(true));

    return () => {
      track.removeEventListener("ended", handlePause);
      track.removeEventListener("pause", handlePause);
      track.removeEventListener("playing", () => setPlaying(true));
    };
  });

  return { ref, handlePlay, handlePause };
};

export default usePlayTrack;
