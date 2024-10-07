import React from 'react';
import './comp.css';
import './Signup.css';

export default function Signup() {
  return(
    <div className='signup-page'>
       <div className="signup-container">
        <h2>SignUp</h2>
        <form>
          <div className="input-group">
            <label>Name</label>
            <input type="name" placeholder="Enter your name"/>
          </div>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>
          <div className="input-group">
            <label>Confirm Password</label>
            <input type="password" placeholder="Re-enter password"/>
          </div>
          <button className='btn'>Signup</button>
        </form>
      </div>
      {/* mobile view */}
       <div className="mob-signup-container">
        <h2>Signup</h2>
        <form>
          <div className="input-group">
            <label>Name</label>
            <input type="name" placeholder="Enter your name"/>
          </div>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email"/>
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password"/>
          </div>
          <div className="input-group">
            <label>Confirm Password</label>
            <input type="password" placeholder="Re-enter password"/>
          </div>
          <button className='btn'>Signup</button>
        </form>
      </div>
    </div>
  )
}
