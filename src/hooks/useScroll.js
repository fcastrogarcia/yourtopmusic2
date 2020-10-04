import { useState, useEffect } from "react";
import throttle from "lodash/throttle";

const useScroll = (stickyValue = 80) => {
  const isSticky = () => window.scrollY >= stickyValue;
  const isScrollAtbottom = () =>
    window.scrollY + window.innerHeight >= document.body.offsetHeight - 80;

  const isInitialSticky = isSticky();
  const isInitialBottom = isScrollAtbottom();

  const [isAtBottom, setIsAtBottom] = useState(isInitialBottom);
  const [sticky, setSticky] = useState(isInitialSticky);

  const scrollCallback = () => {
    setIsAtBottom(isScrollAtbottom());
    setSticky(isSticky());
  };

  const handleScroll = throttle(scrollCallback, 200, { leading: true, trailing: true });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return { sticky, isAtBottom };
};

export default useScroll;
