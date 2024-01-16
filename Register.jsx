import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [highlightUsername, setHighlightUsername] = useState(false);
  const [highlightPassword, setHighlightPassword] = useState(false);
  const [highlightConfirmPassword, setHighlightConfirmPassword] = useState(false);
  const [passwordsMatchError, setPasswordsMatchError] = useState("");

  const handleregister = () => {
    if (username === "") {
      setHighlightUsername(true);
      return; // Exit the function if the username is empty
    } else {
      setHighlightUsername(false);
    }
  
    if (password === "") {
      setHighlightPassword(true);
      return; // Exit the function if the password is empty
    } else {
      setHighlightPassword(false);
    }
  
    if (confirmPassword === "") {
      setHighlightConfirmPassword(true);
      return; // Exit the function if the confirmPassword is empty
    } else {
      setHighlightConfirmPassword(false);
    }
  
    // Check if passwords match
    if (password !== confirmPassword) {
      // Handle passwords not matching
      setPasswordsMatchError("Passwords do not match");
      return; // Exit the function if passwords do not match
    } else {
      // Reset the error if passwords match
      setPasswordsMatchError("");
      // Perform registration logic here
    }
  };
  

  return (
    <div>
    <h1>Shutter Registration</h1>
    <div className="register-container">
 
      <label>Username:</label>
      <br />
      <input
        id="username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter Username"
        className={highlightUsername ? "highlight" : ""}
      />
      <br />
      <label>Password:</label>
      <br />
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password"
        className={highlightPassword ? "highlight" : ""}
      />
      <br />
      <label>Confirm Password:</label>
      <br />
      <input
        id="confirmPassword"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirm Password"
        className={highlightConfirmPassword ? "highlight" : ""}
      />
      {passwordsMatchError && <p className="error-message">{passwordsMatchError}</p>}
      <br />
      <button onClick={handleregister}>Register</button>
    </div>

    </div>
    );
};

export default Register;
