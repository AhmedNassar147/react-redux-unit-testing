import React from "react";
import SpinIcon from "./loadingIcon";
import "./index.css";

const Loader = ({ loading, noData, children }) => {
  if (loading) {
    return (
      <div data-test="spinner" children={SpinIcon} className="container" />
    );
  } else if (noData) {
    return (
      <div data-test="nodata" className="container">
        <p>sorry no data found</p>
      </div>
    );
  }
  return <div data-test="loaderChildren">{children}</div>;
};

export default Loader;
