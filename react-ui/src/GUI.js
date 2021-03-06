import React, { useEffect, useState } from "react";
import "./GUI.css";
import { Entry } from "./Entry";
import { useApiContext } from "./conetext/ApiDataContext";
import { PostForm } from "./PostForm";

export const GUI = () => {
  const apiContext = useApiContext().guestbookData;
  let setData = useApiContext().setGuestbookData;
  let removeData = useApiContext().removeDataFromGuestbook;
  function deleteEntry(id) {
    removeData(id);
  }
  return (
    <div className='GUI'>
      <h1 className='pageHeader'>TheBaer.One🐻</h1>
      <h4 className='subHeader'>made by Dennis Bär🐻</h4>

      <div className='entrysContainer'>
        {apiContext.length > 0 ? (
          apiContext.map((object, index) => {
            return (
              <Entry
                name={object.name}
                id={object.id}
                date={object.date}
                entry={object.entry}
                index={index}
                callback={deleteEntry}
              />
            );
          })
        ) : (
          <></>
        )}
      </div>
      <PostForm />
    </div>
  );
};
