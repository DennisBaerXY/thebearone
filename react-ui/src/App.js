import React, { useRef } from "react";

//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { useApiContext } from "./conetext/ApiDataContext";
import { PostForm } from "./PostForm";

function App() {
  const apiContext = useApiContext();

  return (
    <div className='App'>
      <h1>Hallo Welt</h1>
      <PostForm></PostForm>
    </div>
  );
}

export default App;
