import './LoginPage.css';
import React, { useState, useEffect } from "react";
import axios from "axios";

function LoginPage({ onLogin, setElderly }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

   const handleSubmit = async (e) => {
     e.preventDefault();

     try {
       // Send login credentials to the server
       const response = await axios.post("http://localhost:8800/login", {username,password});

       // Check the response from the server
       if (response.data.success) {
        console.log("Credentials matched")
         // Call onLogin if login is successful
         onLogin();
       } else {
         // Show an error message if login failed
         setError("Invalid credentials");
         console.log(error)
       }
     } catch (err) {
       // Handle any errors that occurred during the request
       console.error("Error during login:", err);
       setError("An error occurred. Please try again.");
     }
   };

  return (
    <div className="login-page">
      <div className="loginWindow">
        <h1>Login</h1>
        <form className="loginForm" onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            value={username}
            placeholder="Username"
            className={"form-control usernameInput"}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            className={"form-control passwordInput"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={handleSubmit}
            className={`btn btn-primary loginButton`}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
