import React, { useRef } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import { useApiContext } from "./conetext/ApiDataContext";
import { PostForm } from "./PostForm";
import { Home } from "./Home";
import { GUI } from "./GUI";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/gui' exact component={GUI}></Route>
      </Switch>
    </Router>
  );
}

export default App;
