import React from "react";
import Lazy from "react-lazyload";

const LazyImage = (props) => (
  <Lazy>
    <img {...props} />
  </Lazy>
);

export default LazyImage;
