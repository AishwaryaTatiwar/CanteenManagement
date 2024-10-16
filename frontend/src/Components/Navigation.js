// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Landing from './Landing.js';
import Login from './login.js';
import Signup from'./Signup.js';
import Menu from './Menu.js';
import CartPage from './CartPage.js';
import ProfilePage from './ProfilePage.js';
import Receipt from './Receipt.js';
const Navigation = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Define your routes here */}
        <Route path="/login" element={<Login></Login>} />
        <Route path="/menu" element={<Menu></Menu>} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/delivery" element={<div>Crowd Monitor</div>} />
        <Route path="/profile" element={<ProfilePage></ProfilePage>} />
        <Route path="/" element={<Landing></Landing>} />
        <Route path='/Signup' element={<Signup></Signup>}></Route>
        <Route path='/Receipt' element={<Receipt></Receipt>}></Route>
      </Routes>
    </Router>
  );
};

export default Navigation;
