import React from "react";
import "./index.css";

const Avatar = ({ src, alt }) => {
  if (src) {
    return <img src={src} alt={alt} />;
  }
  return null;
};

export default Avatar;
