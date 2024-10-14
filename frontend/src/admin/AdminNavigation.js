import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Dashboard from "./Dashboard";
import StaffPage from "./StaffPage";
import MenuPage from "./MenuPage";
function AdminNavigation() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/orders" element={<div>orders</div>} />
        {/* <Route path="/menu" element={<div>menu</div>} /> */}
        <Route path="/menu" element={<MenuPage></MenuPage>} />
        <Route path="/users" element={<div>users</div>} />
        <Route path="/staff" element={<StaffPage></StaffPage>} />
      </Routes>
    </Router>
  );
}

export default AdminNavigation;
