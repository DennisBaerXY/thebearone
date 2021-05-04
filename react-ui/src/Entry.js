import React from "react";
import "./Entry.css";
import whiteTrashCan from "./images/whiteTrash.svg";

export const Entry = ({ id, name, date, entry }) => {
  return (
    <div className='entry'>
      <p className='datum'>{date}</p>
      <div className='flex-column'>
        <p className='name'>{name.toString()}</p>
        <div className='flex-row'>
          <p className='idText'>{id.toString()}</p>
          <p className='entry-text'>{entry}</p>
          <div className='delete-icon'>
            <img className='icon' src={whiteTrashCan} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};
