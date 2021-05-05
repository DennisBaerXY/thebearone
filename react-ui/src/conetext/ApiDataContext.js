import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useLoadingContext } from "./LoadingContext";
//Creates the Context
const ApiDataContext = React.createContext();
const socket = io();
//Component that wraps the other Components to provide the Context
export function ApiDataContextProvider(props) {
  const [guestbookData, setGuestbookData] = useState([]);
  const fetchGuestbookEntrys = async () => {
    let response = await fetch("/api/guestbook/entries");
    let data = await response.json();

    setGuestbookData(data);
  };

  const postDataToGuestbook = async (data) => {
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

    if (response.ok) {
    }
  };

  const removeDataFromGuestbook = async (id) => {
    let newArray = guestbookData.filter((e) => {
      return e.id != id;
    });
    setGuestbookData(newArray);

    try {
      let response = await fetch("/api/guestbook/entries", {
        method: "DELETE",
        body: JSON.stringify({ id }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {}
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

      socket.on("newEntry", (data) => {
        setGuestbookData((old) => [...old, data]);
        console.log("NEW ENTRYY");
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
        removeDataFromGuestbook,
      }}
    >
      {props.children}
    </ApiDataContext.Provider>
  );
}

//Exports and creates a context so we can use the values from the Context.Provider
export const useApiContext = () => React.useContext(ApiDataContext);
