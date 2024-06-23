import React from "react";
import { useNavigate, useLocation, useEffect } from "react-router-dom";
import { useState } from "react";
import "./Sidebar.css"; // Import the CSS file for the sidebar
import "bootstrap-icons/font/bootstrap-icons.css";


function Sidebar({ authenticateFunction }) {
  const [activeButton,setActiveButton] = useState("dashboardButton");
  const navigate = useNavigate();
  const location = useLocation().pathname;

  

  function handleDashboardButton() {
    navigate("/");
    setActiveButton("dashboardButton");
  }
 
  function handleVaccinationButton() {
    setActiveButton("vaccinationButton");
    navigate("/vaccination");
  }
  function handleProfileButton() {
    setActiveButton("profileButton");
    navigate("/profile");

  }
  function handleMedicalDataButton(){
    setActiveButton("medicalDataButton");
    navigate("/medicalData");

  }
   function handleLogoutButton() {
     authenticateFunction(false);
     navigate("/");
   }
   function handleCertificatesButton() {
     setActiveButton("certificatesButton");
     navigate("/certificates")
   }

  return (
    <div className="sidebar">
      <img className="logo" src={require("../images/vaccineLogo.png")} />
      <button
        className={
          activeButton === "dashboardButton"
            ? "activeButton dashboardButton"
            : "dashboardButton"
        }
        onClick={handleDashboardButton}
      >
        Dashboard
      </button>
      <button
        onClick={handleVaccinationButton}
        className={
          activeButton === "vaccinationButton"
            ? "activeButton vaccinationButton"
            : "vaccinationButton"
        }
      >
        Vaccination
      </button>
      <button
        className={
          activeButton === "profileButton"
            ? "activeButton profileButton"
            : "profileButton"
        }
        onClick={handleProfileButton}
      >
        Profile
      </button>
      <button
        className={
          activeButton === "medicalDataButton"
            ? "activeButton medicalDataButton"
            : "medicalDataButton"
        }
        onClick={handleMedicalDataButton}
      >
        Medical Data
      </button>
      <button
        onClick={handleCertificatesButton}
        className={
          activeButton === "certificatesButton"
            ? "activeButton certificatesButton"
            : "certificatesButton"
        }
      >
        Certificates
      </button>
      <button className="logoutButton" onClick={handleLogoutButton}>
        Logout
      </button>
    </div>
  );
}

export default Sidebar;
