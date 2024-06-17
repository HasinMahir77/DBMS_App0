import './LoginPage.css';
import React, { useState } from "react";

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your login logic here
    if (username === "user" && password === "password") {
      onLogin();
    } else {
      alert("Invalid credentials");
    }
  };
  return (
    <div className="login-page">
      <div className='loginWindow'>
        <h1>Login</h1>
        <form className='loginForm' onSubmit={handleSubmit}>
          
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
