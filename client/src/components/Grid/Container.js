
import React from "react";

export const Container = ({ fluid, children }) =>
  <div id="wrap" className={`container${fluid ? "-fluid" : ""}`}>
    {children}

  </div>;
