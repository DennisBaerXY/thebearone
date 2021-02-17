import React from "react";
import { useAuth } from "../contexts/AuthContext";
import "./Dashboard.css";

const Dashboard = () => {
  const { currentUser } = useAuth();
  return (
    <div className='DashBoard'>
      <h1 className='headerTitle'>The Bear.One</h1>

      <p className='welcomeMessage'>{currentUser.displayName}'s Dashboard 🚀</p>
      <div className='contentContainer'>
        <p className='cardContentHeader'>TodoListen</p>
        <div className='cardContainer'></div>
      </div>
    </div>
  );
};

export default Dashboard;
