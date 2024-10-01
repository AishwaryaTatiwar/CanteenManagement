// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Landing from './Landing.js';
import Login from './login.js';
const Navigation = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Define your routes here */}
        <Route path="/login" element={<Login></Login>} />
        <Route path="/menu" element={<div>Menu Page</div>} />
        <Route path="/delivery" element={<div>Delivery Page</div>} />
        <Route path="/profile" element={<div>Profile Page</div>} />
        <Route path="/" element={<Landing></Landing>} />
      </Routes>
    </Router>
  );
};

export default Navigation;
