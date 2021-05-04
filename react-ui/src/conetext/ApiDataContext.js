import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useLoadingContext } from "./LoadingContext";
//Creates the Context
const ApiDataContext = React.createContext();
const socket = io();
//Component that wraps the other Components to provide the Context
export function ApiDataContextProvider(props) {
  const setLoading = useLoadingContext().setloading;
  const [guestbookData, setGuestbookData] = useState();
  const fetchGuestbookEntrys = async () => {
    setLoading(true);
    let response = await fetch("/api/guestbook/entries");
    let data = await response.json();

    setGuestbookData(data);
    setLoading(false);
  };

  const postDataToGuestbook = async (data) => {
    setLoading(true);
    const dataObject = {
      name: data.name,
      entry: data.entry,
    };
    let response = await fetch("/api/guestbook/entries", {
      method: "POST",
      body: JSON.stringify(dataObject),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setLoading(false);
    if (response.ok) {
      dataObject.date = new Date().toISOString();
      socket.emit("addedData", data);

      setGuestbookData((old) => [...old, dataObject]);
    }
  };

  useEffect(() => {
    fetchGuestbookEntrys();
  }, []);

  useEffect(() => {
    try {
      socket.connect();
      socket.on("connect", (data) => {
        socket.emit("hello", "Hello world from Client");
      });
      socket.on("messages", (data) => {});
      socket.on("newData", (data) => {
        data.date = new Date().toISOString();
        setGuestbookData((old) => [...old, data]);
      });

      function name(params) {}
    } catch (err) {}

    return () => socket.disconnect();
  }, []);

  return (
    //Context Provider from our previouse element that used createContext
    <ApiDataContext.Provider
      value={{
        guestbookData,
        fetchGuestbookEntrys,
        postDataToGuestbook,
        setGuestbookData,
      }}
    >
      {props.children}
    </ApiDataContext.Provider>
  );
}

//Exports and creates a context so we can use the values from the Context.Provider
export const useApiContext = () => React.useContext(ApiDataContext);
