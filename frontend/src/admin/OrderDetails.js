import React, { useState } from 'react';
import './OrderDetails.css';

const OrderDetails = ({ order }) => {
  const [activeTab, setActiveTab] = useState('pending'); // Track the active tab
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  const filteredOrders = Array.isArray(order) ? order.filter(order => order.status === activeTab) : [];

  return (
    <div className="order-management">
      {/* Tabs with conditional bottom border */}
      <div className="tabs">
        <button
          className={`tab-btn ${activeTab === 'pending' ? 'active' : ''}`}
          onClick={() => setActiveTab('pending')}
        >
          Pending Orders
        </button>
        <button
          className={`tab-btn ${activeTab === 'delivered' ? 'active' : ''}`}
          onClick={() => setActiveTab('delivered')}
        >
          Delivered Orders
        </button>
        <button
          className={`tab-btn ${activeTab === 'cancelled' ? 'active' : ''}`}
          onClick={() => setActiveTab('cancelled')}
        >
          Cancelled Orders
        </button>
      </div>

      {/* Display orders based on active tab */}
      <div className="order-list">
        {filteredOrders.length > 0 ? (
          filteredOrders.map((order) => (
            <div key={order.id} className="order-card">
              <div className="order-header">
                <span className="order-id">#OrderID: {order.id}</span>
              </div>
              <div className="order-body">
                <div className="order-info-grid">
                  <div className="label">Date and time:</div>
                  <div className="label">Customer:</div>
                  <div className="label">Items and quantity:</div>
                  <div className="label">Total Amount:</div>

                  <div className="value">{order.date}</div>
                  <div className="value">{order.customer}</div>
                  <button className="items-btn" onClick={togglePopup}>Items, quantity, amt</button>
                  <div className="value">Rs.{order.totalAmount}</div>
                </div>
                  
                <div className="order-actions">
                  {/* Conditionally render buttons based on order status */}
                  {activeTab === 'pending' && (
                    <>
                      <button className="accept-btn">Accept</button>
                      <button className="reject-btn">Reject</button>
                    </>
                  )}
                </div>
              </div>

              {/* Conditional Rendering for Popup */}
              {isPopupVisible && (
                <div className="popup">
                  <div className="popup-content">
                    <h3>Items and Quantity</h3>
                    <ul>
                      {order.items.map((item, index) => (
                        <li key={index}>
                          {item.name} - {item.quantity} plt @ Rs.{item.amount} each
                        </li>
                      ))}
                    </ul>
                    <button className="close-btn" onClick={togglePopup}>
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No orders in this category.</p>
        )}
      </div>
    </div>
  );
};

export default OrderDetails;
