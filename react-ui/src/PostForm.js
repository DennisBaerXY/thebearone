import React, { useRef } from "react";
import { useApiContext } from "./conetext/ApiDataContext";
import "./PostForm.css";

export const PostForm = () => {
  const name = useRef();

  const entry = useRef();

  //On Submit it uses the PostDataToGuestbook method from the context
  const apiContext = useApiContext();
  const postMethod = apiContext.postDataToGuestbook;
  const setData = apiContext.setGuestbookData;
  return (
    <form
      className='PostForm'
      onSubmit={(e) => {
        e.preventDefault();
        const dataObject = {
          name: name.current.value,

          entry: entry.current.value,
        };
        postMethod(dataObject);
      }}
    >
      <div className='inputGroup'>
        <label htmlFor='name'>Name</label>
        <input type='text' name='name' className='inputField' ref={name} />
      </div>
      <div className='inputGroup'>
        <label htmlFor='entry'>Entry</label>
        <input type='text' name='entry' className='inputField' ref={entry} />
      </div>

      <button className='submit-button' type='submit'>
        Submit!
      </button>
    </form>
  );
};
