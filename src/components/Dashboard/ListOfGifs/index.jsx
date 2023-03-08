import React from "react";
import Gif from "../Gif";

const ListOfGifs = ({ callingError, gifs }) => {
  return (
    <ul>
      {callingError !== "" ? (
        <p>{callingError}</p>
      ) : gifs.length ? (
        gifs.map(({ images, id, title }) => (
          <Gif key={id} images={images} id={id} title={title} />
        ))
      ) : (
        <p>No results</p>
      )}
    </ul>
  );
};

export default ListOfGifs;
