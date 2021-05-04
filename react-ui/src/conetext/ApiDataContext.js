import React, { useEffect, useState } from "react";

//Creates the Context
const ApiDataContext = React.createContext();

//Component that wraps the other Components to provide the Context
export function ApiDataContextProvider(props) {
  const [guestbookData, setGuestbookData] = useState();
  const fetchGuestbookEntrys = async () => {
    let response = await fetch("/api/guestbook/entries");
    let data = await response.json();
    setGuestbookData(data);
  };

  const postDataToGuestbook = async (data) => {
    const dataObject = {
      name: data.name,
      date: data.date,
      entry: data.entry,
    };
    let response = await fetch("/api/guestbook/entries", {
      method: "POST",
      body: JSON.stringify(dataObject),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response.status);
  };

  useEffect(() => {
    fetchGuestbookEntrys();
  }, []);

  useEffect(() => {
    if (guestbookData) {
      console.log(guestbookData);
    }
  }, [guestbookData]);

  return (
    //Context Provider from our previouse element that used createContext
    <ApiDataContext.Provider
      value={{ guestbookData, fetchGuestbookEntrys, postDataToGuestbook }}
    >
      {props.children},
    </ApiDataContext.Provider>
  );
}

//Exports and creates a context so we can use the values from the Context.Provider
export const useApiContext = () => React.useContext(ApiDataContext);
