import React, { useState } from "react";
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
import HomePage from "./pages/Page2";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLoginComplete = () => {
    setIsAuthenticated(true);
    navigate("/");
  };

  return (
    <div className="App">
      {isAuthenticated && <Sidebar />}
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
                  isAuthenticated ? <HomePage /> : <Navigate to="/login" />
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
                    <HomePage />
                  ) : (
                    <LoginPage onLogin={handleLoginComplete} />
                  )
                }
              />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
}

export default App;
