import React from "react";

const Jumbotron = ({ children }) => (
  <div
    style={{ height: 150, clear: "both", paddingTop: 50, margin: 10, textAlign: "center", backgroundColor: "teal" }}
    className="jumbotron"
  >
    {children}
  </div>
);

export default Jumbotron;
