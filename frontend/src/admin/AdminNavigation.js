import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Dashboard from "./Dashboard";
import StaffPage from "./StaffPage";
import MenuPage from "./MenuPage";
import OrderDetails from "./OrderDetails";
import UsersPage from './UsersPage.js';
function AdminNavigation() {
  const order = [
    {
      id: '12345',
      date: '2024-10-12 14:30',
      customer: 'John Doe',
      items: [
        { name: 'Burger', quantity: 2,amount:100 },
        { name: 'Fries', quantity: 1,amount:50 },
      ],
      totalAmount: 250,
      status: 'pending',
    },
    {
      id: '12346',
      date: '2024-10-11 12:00',
      customer: 'Jane Doe',
      items: [
        { name: 'Pizza', quantity: 1,amount:200 },
      ],
      totalAmount: 200,
      status: 'delivered',
    },
    {
      id: '12356',
      date: '2024-10-11 12:05',
      customer: 'Eleven Doe',
      items: [
        { name: 'Pizza', quantity: 1,amount:200 },
      ],
      totalAmount: 200,
      status: 'delivered',
    },
    {
      id: '12347',
      date: '2024-10-10 11:00',
      customer: 'Mike Ross',
      items: [
        { name: 'Pasta', quantity: 2,amount: 400 },
      ],
      totalAmount: 800,
      status: 'cancelled',
    },
  ];
  
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/orders" element={<OrderDetails order={order}></OrderDetails>} />
        <Route path="/menu" element={<MenuPage></MenuPage>} />
        <Route path="/users" element={<UsersPage></UsersPage>} />
        <Route path="/staff" element={<StaffPage></StaffPage>} />
        <Route path="/userquery" element={<div>User queries</div>} />
      </Routes>
    </Router>
  );
}

export default AdminNavigation;
