"use client"
import React, { useState } from "react";
import Context from "./Context";

const ContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <Context.Provider value={{ loading, setLoading }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
