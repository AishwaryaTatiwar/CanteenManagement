import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './comp.css';

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="site-name">
          <Link to="/">Smart Canteen</Link>
        </div>
        <div className="nav-toggle" onClick={toggleSidebar}>
          <span>&#9776;</span> {/* Hamburger Icon */}
        </div>
        <div className="nav-links">
          <Link to="/login">Login</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/delivery">Delivery</Link>
          <Link to="/profile">Profile</Link>
        </div>
      </nav>

      {/* Sidebar */}
      <div id="sidebar" className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <a href="#" className="closebtn" onClick={toggleSidebar}>&times;</a>
        <Link to="/login">Login</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/delivery">Delivery</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </div>
  );
}

export default Navbar;
