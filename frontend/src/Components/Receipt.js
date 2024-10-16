import React from 'react';
import { useLocation } from 'react-router-dom';
import './Receipt.css';

const Receipt = () => {
  const location = useLocation();
  const { cartItems, totalPrice } = location.state || { cartItems: [], totalPrice: 0 }; // default values in case no state is passed

  return (
    <div className="receipt-container">
      <div className="receipt-box">
        {/* Header */}
        <div className="receipt-header">
          <h1 className="receipt-title">
            Smart <span className="highlight">Canteen</span>
          </h1>
          <h2 className="receipt-subtitle">Order Receipt</h2>
        </div>

        {/* Customer Details */}
        <div className="section">
          <h3>Customer Details</h3>
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Payment method:</strong> UPI</p>
          <p><strong>Transaction ID:</strong> #CAN12345678</p>
          <p><strong>Transaction Status:</strong> Successful</p>
        </div>

        {/* Order Details */}
        <div className="section">
          <h3>Order Details</h3>
          <p><strong>Order ID:</strong> #ORD987654</p>
          <table className="order-summary">
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Unit Price (Rs.)</th>
                <th>Subtotal (Rs.)</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td>{item.title}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                  <td>{item.price * item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="total-price"><strong>Total Price:</strong> Rs. {totalPrice}</p>
        </div>

        {/* Footer */}
        <div className="receipt-footer">
          <p>Thank you for your order! We hope you enjoy your meal.</p>
          <button className="cancel-button">Cancel Order</button>
          <button className="download-button">Download Receipt</button>
        </div>
      </div>
    </div>
  );
};

export default Receipt;
