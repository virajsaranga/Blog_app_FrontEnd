import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style/Signup.css';
import axios from "./axios";

const Signup = () => {
    const [user, setUser] = useState({
        user_name: "",
        password: "",
        email: "",
        first_name: "",
        last_name: "",
      });
    
      let navigate = useNavigate();
    
      function sendData(e) {
        e.preventDefault();
    
        axios
          .post("api/user/createUser", user)
          .then(() => {
            alert("user added");
            navigate("/Loginn");
          })
          .catch((err) => {
            alert(err);
          });
      }
      function handleChange(event) {
        const { name, value } = event.target;
    
        setUser((preValue) => {
          return {
            ...preValue,
            [name]: value,
          };
        });
      }
  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={sendData}>
        <h2>Create an Account</h2>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            className="form-control"
            id="user_name"
            name="user_name"
            placeholder="Enter first name"
            onChange={handleChange}
            value={user.user_name}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
           type="password"
           className="form-control"
           id="passord"
           name="password"
           placeholder="Enter password"
           onChange={handleChange}
           value={user.password}
           required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Enter email address"
            onChange={handleChange}
            value={user.email}
            required
          />
        </div>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            className="form-control"
            id="first_name"
            name="first_name"
            placeholder="Enter first name"
            onChange={handleChange}
            value={user.first_name}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            className="form-control"
            id="last_name"
            name="last_name"
            placeholder="Enter last name"
            onChange={handleChange}
            value={user.last_name}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
