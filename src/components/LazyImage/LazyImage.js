import React from "react";
import Lazy from "react-lazyload";

const LazyImage = (props) => (
  <Lazy>
    {/* eslint-disable-next-line jsx-a11y/alt-text */}
    <img {...props} />
  </Lazy>
);

export default LazyImage;
