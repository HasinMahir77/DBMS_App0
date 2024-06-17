import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.css"; // Import the CSS file for the sidebar
import "bootstrap-icons/font/bootstrap-icons.css";


function Sidebar({ authenticateFunction }) {
  const navigate = useNavigate();
  function handleLogoutButton() {}
  function handleAboutButton() {
    navigate("/about");
  }
  function handleHomeButton() {
    navigate("/");
  }
  function handleLogoutButton() {
    authenticateFunction(false);
    navigate("/");
  }
  return (
    <div className="sidebar">
      <img
        className="logo"
        src={require('../images/vaccineLogo.png')}
      />
      <button className="homeButton" onClick={handleHomeButton}>
        Dashboard
      </button>
      <button>Vaccination</button>
      <button onClick={handleAboutButton}>Profile</button>
      <button>Medical Data</button>
      <button className="logoutButton" onClick={handleLogoutButton}>
        Logout
      </button>
    </div>
  );
}

export default Sidebar;
