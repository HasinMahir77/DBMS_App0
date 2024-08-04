import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
  Link,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import DashboardPage from "./pages/DashboardPage";
import ContactPage from "./pages/ContactPage";
import VaccinationPage from "./pages/VaccinationPage";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import MedicalDataPage from "./pages/MedicalDataPage";
import CertificatesPage from "./pages/CertificatesPage";
import Sidebar from "./components/Sidebar";
import SidebarRight from "./components/SidebarRight";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  //Actual user data from database
  const [elderly, setElderly] = useState({});
  const [caretaker, setCaretaker] = useState({});
  const [appointments, setAppointments] = useState({});
//Fetching appointments
const fetchAppointments = async () => {
  if (!elderly.ElderlyNid) return; // Ensure we have the ElderlyNid before making the request

  try {
    const response = await axios.get(
      `http://localhost:8800/appointments/${elderly.ElderlyNid}`
    );
    setAppointments(response.data);
    console.log(elderly.ElderlyNid)
    console.log("Fetched Appointments:", appointments); // Log the appointments
  } catch (error) {
    console.error("Error fetching appointments:", error);
  }
};
  useEffect(() => {
    fetchAppointments();
  }, [elderly.ElderlyNid]);
  
  //------------

  const [availableVaccines, setAvailableVaccines] = useState([
    "Flu",
    "Tetanus",
    "Covid-19",
    "Measles",
    "Cholera",
  ]);

  useEffect(() => {
    document.title = "Vaccination";
  }, []);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  function handleLoginComplete(elderly,caretaker) {
    setElderly(elderly);
    setCaretaker(caretaker);
    // Fetch appointments and only proceed after fetching
    fetchAppointments().then(() => {
      setIsAuthenticated(true);
      navigate("/");
    });
  };

  return (
    <div className="App">
      {isAuthenticated && <Sidebar authenticateFunction={setIsAuthenticated} />}
      {isAuthenticated && <SidebarRight />}
      <div className="main-content">
        <TransitionGroup>
          <CSSTransition
            key={window.location.pathname}
            classNames="page"
            timeout={300}
          >
            <Routes>
              <Route
                path="/"
                element={
                  isAuthenticated ? (
                    <DashboardPage elderly={elderly} caretaker={caretaker} appointment={appointments} />
                  ) : (
                    <Navigate to="/login" />
                  )
                }
              />
              <Route
                path="/vaccination"
                element={
                  isAuthenticated ? (
                    <VaccinationPage
                      elderly={elderly}
                      caretaker={caretaker}
                      availableVaccines={availableVaccines}
                    />
                  ) : (
                    <Navigate to="/login" />
                  )
                }
              />
              <Route
                path="/contact"
                element={
                  isAuthenticated ? <ContactPage /> : <Navigate to="/login" />
                }
              />
              <Route
                path="/medicaldata"
                element={
                  isAuthenticated ? (
                    <MedicalDataPage />
                  ) : (
                    <Navigate to="/login" />
                  )
                }
              />
              <Route
                path="/certificates"
                element={
                  isAuthenticated ? (
                    <CertificatesPage />
                  ) : (
                    <Navigate to="/login" />
                  )
                }
              />
              <Route
                path="/profile"
                element={
                  isAuthenticated ? (
                    <ProfilePage
                      elderly={elderly}
                      caretaker={caretaker}
                      setElderly={setElderly}
                      setCaretaker={setCaretaker}
                    />
                  ) : (
                    <Navigate to="/login" />
                  )
                }
              />
              <Route
                path="*"
                element={
                  isAuthenticated ? <NotFound /> : <Navigate to="/login" />
                }
              />
              <Route
                path="/login"
                element={
                  isAuthenticated ? (
                    <DashboardPage elderly={elderly} caretaker={caretaker} />
                  ) : (
                    <LoginPage
                      onLogin={handleLoginComplete}
                    />
                  )
                }
              />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
