import React from "react";
import { arrayOf, object, string } from "prop-types";
import styles from "./styles";

const Artist = ({ name, genres, images }) => {
  console.log(images);
  return <h3>Artist item</h3>;
};

Artist.propTypes = {
  name: string,
  genres: arrayOf(string),
  images: arrayOf(object),
};

Artist.defaultProps = {
  name: "",
  genres: [""],
  images: Array(2).fill({ url: "" }),
};

export default Artist;
