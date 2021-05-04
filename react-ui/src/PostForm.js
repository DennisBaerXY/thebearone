import React, { useRef } from "react";
import { useApiContext } from "./conetext/ApiDataContext";

export const PostForm = () => {
  const name = useRef();
  const date = useRef();
  const entry = useRef();

  //On Submit it uses the PostDataToGuestbook method from the context
  const apiContext = useApiContext();
  const postMethod = apiContext.postDataToGuestbook;
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const dataObject = {
          name: name.current.value,
          date: date.current.value,
          entry: entry.current.value,
        };
        postMethod(dataObject);
      }}
    >
      <input type='text' name='name' ref={name} />
      <input type='text' name='date' ref={date} />
      <input type='text' name='entry' ref={entry} />
      <button type='submit'>Submit!</button>
    </form>
  );
};
