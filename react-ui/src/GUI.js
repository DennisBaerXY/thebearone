import React, { useEffect, useState } from "react";
import "./GUI.css";
import { Entry } from "./Entry";
import { useApiContext } from "./conetext/ApiDataContext";
import { PostForm } from "./PostForm";

export const GUI = () => {
  const apiContext = useApiContext().guestbookData;

  return (
    <div className='GUI'>
      <h1 className='pageHeader'>TheBaer.One🐻</h1>
      <h4 className='subHeader'>made by Dennis Bär🐻</h4>

      <div className='entrysContainer'>
        {apiContext ? (
          apiContext.map((object, index) => {
            return (
              <Entry
                name={object.name}
                id={index + 1}
                date={object.date}
                entry={object.entry}
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
