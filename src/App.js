import React, { useState, useEffect } from "react";
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
import Sidebar from "./components/Sidebar";
import SidebarRight from "./components/SidebarRight";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  var Rafid = {
    fname: "Rafid",
    lname: "Alam",
    dob: 13,


    address: "191, Block D, Bashundhara R/A, Dhaka",
    receivedVaccines: ["MMR", "Flu 2020", "Covid-19"],
    recommendedVaccines: ["Flu", "Tetanus"],
    appointment: { appointed: false, center: null, date: null, time: null },
  };
  

  var Hasib = {
    fname: "Hasib",
    lname: "Islam",
    dob: 13,
    mob: 3,
    yob: 2002,
    address: "191, Block D, Bashundhara R/A, Dhaka",
    receivedVaccines: ["MMR", "Flu 2020", "Covid-19"],
    recommendedVaccines: ["Flu", "Tetanus"],
  };
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

  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLoginComplete = () => {
    setIsAuthenticated(true);
    navigate("/");
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
                    <DashboardPage elderly={Rafid} caretaker={Hasib} />
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
                      elderly={Rafid}
                      caretaker={Hasib}
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
                path="*"
                element={
                  isAuthenticated ? <NotFound /> : <Navigate to="/login" />
                }
              />
              <Route
                path="/login"
                element={
                  DashboardPage
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
