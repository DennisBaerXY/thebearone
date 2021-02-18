import React, { useEffect, useState } from "react";
import "./LandingPageLoggedOut.css";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const LandingPageLoggedOut = (props) => {
  const { currentUser, logout } = useAuth();
  function logOut(e) {
    console.log("This works");
    logout();
  }

  if (currentUser) {
    return (
      <div className='LandingPage'>
        <div className='TopBar'>
          <h1 className='headerTitle'>The Bear.One</h1>

          <div className='ButtonContainer'>
            <button className='navButton' onClick={logOut}>
              Log out 👋
            </button>
          </div>
        </div>

        <h2 className='welcomeBackMessage'>
          Welcome back {currentUser.displayName}🎉🎉
        </h2>

        <h3 className='subWelcomeMessage'>Recently visited Todo-Lists</h3>
        <div className='recentlyTodoBox'>
          <button className='recentTodoButton'>
            <p className='recentTodoButton-text'>1. Shopping List🛒</p>
          </button>
          <button className='recentTodoButton'>
            <p className='recentTodoButton-text'>2. Stuff to do 😉</p>
          </button>
          <button className='recentTodoButton'>
            <p className='recentTodoButton-text'>3. Shopping List</p>
          </button>
          <button className='recentTodoButton'>
            <p className='recentTodoButton-text'>4. Shopping List</p>
          </button>
          <button className='recentTodoButton'>
            <p className='recentTodoButton-text'>5. Shopping List</p>
          </button>
        </div>

        <div className='loggedInButtonBox'>
          <Link to='/todo-lists'>
            <button className='navigationLoggedIn'>
              <span className='navigationButtonText'>Todo Lists</span>
            </button>
          </Link>

          <Link to='/dashboard'>
            <button className='navigationLoggedIn' id='dashboardButton'>
              <span className='navigationButtonText'>Dashboard</span>
            </button>
          </Link>
        </div>
        <div className='ContentContainer'>
          <p className='LandingPageArtikle'>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At
          </p>

          <div className='LandingPageBox'>
            <p className='LandingPageBoxHeader'>Todo</p>
          </div>
        </div>

        <div className='centerSignupButton'></div>
      </div>
    );
  } else {
    return (
      <div className='LandingPage'>
        <div className='TopBar'>
          <h1 className='headerTitle'>The Bear.One</h1>

          <div className='ButtonContainer'>
            <Link to='/signup'>
              <button className='navButton'>Register</button>
            </Link>
            <Link to='/login'>
              <button className='navButton'>Login</button>
            </Link>
          </div>
        </div>
        <div className='ContentContainer'>
          <p className='LandingPageArtikle'>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At
          </p>

          <div className='LandingPageBox'>
            <p className='LandingPageBoxHeader'>Todo</p>
          </div>
        </div>

        <div className='centerSignupButton'>
          <Link to='/signup'>
            <button className='SignUpButton'>Sign Up</button>
          </Link>
        </div>
      </div>
    );
  }
};

export default LandingPageLoggedOut;
