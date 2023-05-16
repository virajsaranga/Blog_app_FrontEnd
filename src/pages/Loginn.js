import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "./axios";
import './style/Login.css';

const Login = () => {
    const [valid, setValid] = useState(false);
    const [user, setUser] = useState({
      email: "",
      password: "",
    });
  
    let navigate = useNavigate();
  
    function sendData(e) {
      e.preventDefault();
  
      axios
        .post("api/user/userLogin", user)
        .then((res) => {
          if (res.status === 200) {
            alert("user validated");
            setValid(res.data);
  
            navigate("/Home");
          }
        })
        .catch((err) => {
          alert("Login details are invalid, Please try again!!!");
  
          setValid(false);
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
    <div className="login-container">
      <form className="login-form" onSubmit={sendData}>
        <h2>Login</h2>
        <div className="form-group">
          <label>Email:</label>
          
            <input
            type="text"
            //className="form-control"
            name="adminId"
            value={user.adminId}
            onChange={handleChange}
            required
          />
          
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
        <p class="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?{" "}
                  <a href="/SignUPP" class="link-danger">
                    Register
                  </a>
                  </p>

      </form>
    </div>
  );
};

export default Login;
