import React, { useState } from "react";
import { ApiDataContextProvider } from "./ApiDataContext";

const LoadingContext = React.createContext();

export const LoadingContextProvider = (props) => {
  const [loading, setloading] = useState(true);
  if (loading) {
    return (
      <LoadingContext.Provider
        value={{
          setloading,
        }}
      >
        <ApiDataContextProvider>
          <div>Loading....</div>
        </ApiDataContextProvider>
      </LoadingContext.Provider>
    );
  } else {
    return (
      <LoadingContext.Provider
        value={{
          setloading,
        }}
      >
        <ApiDataContextProvider>{props.children}</ApiDataContextProvider>
      </LoadingContext.Provider>
    );
  }
};

export const useLoadingContext = () => React.useContext(LoadingContext);
