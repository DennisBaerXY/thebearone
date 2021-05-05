import React, { useState } from "react";
import { ApiDataContextProvider } from "./ApiDataContext";
import LoadingGif from "../images/loading.gif";
import "./Loading.css";

const LoadingContext = React.createContext();

export const LoadingContextProvider = (props) => {
  const [loading, setloading] = useState(false);

  return (
    <LoadingContext.Provider
      value={{
        setloading,
      }}
    >
      <ApiDataContextProvider>{props.children}</ApiDataContextProvider>
    </LoadingContext.Provider>
  );
};

export const useLoadingContext = () => React.useContext(LoadingContext);
