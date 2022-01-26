import React from "react";

const LoadingContainer = () => {
  const cSpinnerBorder = {
    display: "inline-block",
    width: "2rem",
    height: "2rem",
    verticalAlign: "-0.125em",
    border: "0.25em solid currentColor",
    borderRightColor: "transparent",
    borderRadius: "50%",
    animation: ".75s linear infinite spinner-border",
    color: "orange",
  };

  return (
    <>
      {/* <div className="c-spinner-border" role="status">
        <span className="c-sr-only"></span>
      </div> */}
      <div style={cSpinnerBorder} role="status">
        <span className="sr-only"></span>
      </div>
    </>
  );
};

export default LoadingContainer;
