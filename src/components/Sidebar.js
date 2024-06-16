import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css"; // Import the CSS file for the sidebar
import NavigateButton from "./NavigateButton";

function Sidebar() {
  function handleLogoutButton(){

  }
  return (
    <div className="">
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <NavigateButton
          className="LogOutButton"
          text="Log Out"
          to="/login"
        />
      </ul>
    </div>
    </div>
  );
}

export default Sidebar;
