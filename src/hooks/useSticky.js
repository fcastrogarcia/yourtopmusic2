import { useState, useEffect } from "react";
import throttle from "lodash/throttle";

const useSticky = (stickyValue = 80) => {
  const validateSticky = () => window.scrollY >= stickyValue;
  const isInitialSticky = validateSticky();
  const [sticky, setSticky] = useState(isInitialSticky);
  const handleSticky = () => setSticky(validateSticky());

  useEffect(() => {
    window.addEventListener(
      "scroll",
      throttle(handleSticky, 200, { leading: true, trailing: true })
    );
    return () => window.removeEventListener("scroll", handleSticky);
  });

  return { sticky };
};

export default useSticky;
