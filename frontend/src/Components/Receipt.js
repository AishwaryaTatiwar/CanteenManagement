import React from 'react';
import './Receipt.css';

const Receipt = () => {
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
              <tr>
                <td>Chola Bhatura</td>
                <td>1</td>
                <td>50</td>
                <td>50</td>
              </tr>
            </tbody>
          </table>
          <p className="total-price"><strong>Total Price:</strong> Rs.50</p>
        </div>

        {/* Footer */}
        <div className="receipt-footer">
          <p>Thank you for your order! We hope you enjoy your meal.</p>
          <button className="feedback-button">Give Feedback</button>
          <button className="feedback-button">Download Receipt</button>
        </div>
      </div>
    </div>
  );
};

export default Receipt;
