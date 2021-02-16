import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className='LandingPage'>
      <h1 className='headerTitle'>The Bear.One</h1>

      <p className='welcomeMessage'>CurrentUser's Dashboard 🚀</p>
      <div className='contentContainer'>
        <p className='cardContentHeader'>TodoListen</p>
        <div className='cardContainer'></div>
      </div>
    </div>
  );
};

export default Dashboard;
