import React ,{useEffect,useState} from 'react';
import { useLocation } from 'react-router-dom';
import axios from "axios";
import './Receipt.css';

const Receipt = () => {
  const location = useLocation();
  const { cartItems, totalPrice } = location.state || { cartItems: [], totalPrice: 0 }; // default values in case no state is passed
  const [userName, setUserName] = useState(''); // State for storing the user's name
    const [userEmail, setUserEmail] = useState(''); // State for storing the user's name

    const [error, setError] = useState(null); // State for handling errors

    // Function to decode JWT token
    const decodeJwt = (token) => {
        if (!token) return null;
        const payload = token.split('.')[1];
        return JSON.parse(atob(payload));
    };

    // Get the token from localStorage and decode it to extract userId
    const token = localStorage.getItem('token');
    const userId = decodeJwt(token)?.userID;


    // Function to fetch user name from the server
    const fetchUserName = async () => {
        try {
            const response = await axios.get(`http://localhost:8283/api/user/${userId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`, // Include your token in the request
                },
            });

            const data = response.data;
            if (data.success) {
                setUserName(data.data.name); // Set the user's name in the state
            } else {
                setError(data.message); // Handle error message
            }
        } catch (error) {
            console.error('Error fetching user name:', error);
            setError('Failed to fetch user name');
        }
    };
    const fetchUserEmail = async () => {
        try {
            const response = await axios.get(`http://localhost:8283/api/user/${userId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`, // Include your token in the request
                },
            });

            const data = response.data;
            if (data.success) {
                setUserEmail(data.data.email); // Set the user's name in the state
            } else {
                setError(data.message); // Handle error message
            }
        } catch (error) {
            console.error('Error fetching user name:', error);
            setError('Failed to fetch user name');
        }
    };

    // Fetch user name on component mount
    useEffect(() => {
        fetchUserName();
        fetchUserEmail();
    }, [userId]);

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
          <p><strong>Name:</strong> {userName}</p>
          <p><strong>Email:</strong> {userEmail}</p>
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
