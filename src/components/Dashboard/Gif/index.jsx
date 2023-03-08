import React from "react";

const Gif = ({ id, title, images }) => {
  return (
    <li key={id}>
      <img src={images.downsized_medium.url} alt="title" srcSet="" />
      <h4>{title}</h4>
    </li>
  );
};

export default Gif;
