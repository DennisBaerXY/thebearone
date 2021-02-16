import React from "react";
import logo from "./logo.svg";
import LandingPageLoggedOut from "./LandingPageLoggedOut/LandingPageLoggedOut";
import SignUp from "./SignUp/SignUp";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import { AuthProvider } from "./contexts/AuthContext";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path='/' component={LandingPageLoggedOut} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/dashboard' component={Dashboard} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
