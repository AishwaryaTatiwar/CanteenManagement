// import React from "react";
// import "./comp.css";
// import "./login.css";
import React from 'react';
import {Link, Route,Routes} from 'react-router-dom';
import './comp.css';
import './login.css';


export default function login() {
  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>
          <button className="btn">Login</button>
        </form>
        <div className="signup">
          <h3>Don't have an account?</h3>
          <button className="signup-btn">Signup</button>
        </div>
      </div>
      {/* mobile view */}
      <div className="mob-login-container">
        <h2>Login</h2>
        <form>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>
          <button className="btn">Login</button>
        </form>
        <div className='mob-signup'>
        <h3>Don't have an account?</h3>
        <Link to="/Signup">
        <button className='signup-btn'>Signup</button>
        </Link>
        </div>
      </div>
    </div>
  );
}
