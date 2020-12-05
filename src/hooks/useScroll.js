import { useState, useEffect } from "react";
import throttle from "lodash/throttle";

const useScroll = (stickyValue = 80, bottomOffset = 80, threshold = 40) => {
  const isSticky = () => window.scrollY >= stickyValue;
  const isScrollAtbottom = () =>
    window.scrollY + window.innerHeight >= document.body.offsetHeight - bottomOffset;

  const isInitialSticky = isSticky();

  const [isAtBottom, setIsAtBottom] = useState(false);
  const [sticky, setSticky] = useState(isInitialSticky);
  const [isScrollUp, setScrollUp] = useState(false);

  let prevScrollY = window.scrollY;

  const handleScrollDirection = () => {
    const nextScrollY = window.scrollY;
    if (Math.abs(nextScrollY - prevScrollY) < threshold) return;
    setScrollUp(nextScrollY < prevScrollY);
    prevScrollY = nextScrollY;
  };

  const scrollCallback = e => {
    handleScrollDirection();
    setIsAtBottom(isScrollAtbottom());
    setSticky(isSticky());
  };

  const handleScroll = throttle(scrollCallback, 200, { leading: true, trailing: true });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return { sticky, isAtBottom, isScrollUp };
};

export default useScroll;
