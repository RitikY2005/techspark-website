import React from "react";
import PropTypes from "prop-types";

const Loader = ({ width = "50px", height = "50px", color = "#3498db" }) => {
  const loaderStyle = {
    width,
    height,
    border: `5px solid ${color}`,
    borderTop: "5px solid transparent",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "auto" }}>
      <div style={loaderStyle}></div>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

Loader.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
};

export default Loader;
