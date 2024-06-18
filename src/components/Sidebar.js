import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.css"; // Import the CSS file for the sidebar
import "bootstrap-icons/font/bootstrap-icons.css";


function Sidebar({ authenticateFunction }) {
  var currentPath = window.location.pathname;
  const navigate = useNavigate();
  while (currentPath==="/"){
    
  }
  return (
    <div className="sidebar">
      <img className="logo" src={require("../images/vaccineLogo.png")} />
      <button className="dashboardButton" onClick={handleHomeButton}>
        Dashboard
      </button>
      <button className="vaccinationButton">Vaccination</button>
      <button className="profileButton" onClick={handleProfileButton}>
        Profile
      </button>
      <button className="medicalHistoryButton">Medical History</button>
      <button className="logoutButton" onClick={handleLogoutButton}>
        Logout
      </button>
    </div>
  );

  function handleLogoutButton() {}
  function handleProfileButton() {}
  function handleHomeButton() {
    navigate("/");
  }
  function handleLogoutButton() {
    authenticateFunction(false);
    navigate("/");
  }

  
}

export default Sidebar;
