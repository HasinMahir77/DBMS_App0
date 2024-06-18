import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
  Link
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import DashboardPage from "./pages/DashboardPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";
import Sidebar from "./components/Sidebar";
import SidebarRight from "./components/SidebarRight";
import Footer
 from "./components/Footer";
import "./App.css";

function App() {
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
      {isAuthenticated && <SidebarRight/>}
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
                  isAuthenticated ? <DashboardPage /> : <Navigate to="/login" />
                }
              />
              <Route
                path="/about"
                element={
                  isAuthenticated ? <AboutPage /> : <Navigate to="/login" />
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
                  isAuthenticated ? (
                    <DashboardPage />
                  ) : (
                    <LoginPage onLogin={handleLoginComplete} />
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
