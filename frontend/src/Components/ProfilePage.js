import React, { useState, useEffect } from 'react';
import './ProfilePage.css';
import axios from "axios";
import { useParams } from 'react-router-dom';

function ProfilePage() {
    const [activeTab, setActiveTab] = useState('personal-info'); // Set the default active tab
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

    // Function to handle tab click
    const handleTabClick = (tab) => {
        setActiveTab(tab); // Update the active tab on click
    };

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
        <div className="profile-page">
            {/* Profile Banner */}
            <div className="profile-banner">
                <div className="profile-details">
                    <div className="profile-image">
                        <img src='https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg' alt="Profile" />
                    </div>
                    <div className="profile-name">{userName || 'Loading...'}</div> {/* Display user's name */}
                </div>
                <button className="edit-profile-btn">Edit Profile</button>
            </div>

            {/* Profile Sidebar and Content */}
            <div className="profile-content">
                <div className="profile-info-activity">
                    <h3>PROFILE</h3>
                    <ul>
                        <li><button className={activeTab === 'personal-info' ? 'active' : ''} onClick={() => handleTabClick('personal-info')}>Personal Info</button></li>
                        <li><button className={activeTab === 'cart' ? 'active' : ''} onClick={() => handleTabClick('cart')}>Cart</button></li>
                        <li><button className={activeTab === 'favourites' ? 'active' : ''} onClick={() => handleTabClick('favourites')}>Favourites</button></li>
                        <li><button className={activeTab === 'notifications' ? 'active' : ''} onClick={() => handleTabClick('notifications')}>Notifications</button></li>
                    </ul>
                    <h3>ACTIVITY</h3>
                    <ul>
                        <li><button className={activeTab === 'order-history' ? 'active' : ''} onClick={() => handleTabClick('order-history')}>Order History</button></li>
                        <li><button className={activeTab === 'reviews' ? 'active' : ''} onClick={() => handleTabClick('reviews')}>Reviews</button></li>
                        <li><button className={activeTab === 'settings' ? 'active' : ''} onClick={() => handleTabClick('settings')}>Settings</button></li>
                    </ul>
                </div>

                {/* Tab Content Display */}
                <div className="tab-content">
                    {activeTab === 'personal-info' && (
                        <div className="info-box">
                            <h3>Personal Information</h3>
                            <p><strong>Name:</strong> {userName}</p> {/* Display the user's name */}
                            <p><strong>Email:</strong> {userEmail}</p> 
                        </div>
                    )}

                    {activeTab === 'cart' && (
                        <div className="info-box">
                            <h3>Cart</h3>
                            <p>Your cart is currently empty.</p>
                        </div>
                    )}

                    {activeTab === 'favourites' && (
                        <div className="info-box">
                            <h3>Favourites</h3>
                            <p>You have no favourite items.</p>
                        </div>
                    )}

                    {activeTab === 'notifications' && (
                        <div className="info-box">
                            <h3>Notifications</h3>
                            <p>No new notifications.</p>
                        </div>
                    )}

                    {activeTab === 'order-history' && (
                        <div className="info-box">
                            <h3>Order History</h3>
                            <p>You have not placed any orders.</p>
                        </div>
                    )}

                    {activeTab === 'reviews' && (
                        <div className="info-box">
                            <h3>Reviews</h3>
                            <p>You haven't given order reviews.</p>
                        </div>
                    )}

                    {activeTab === 'settings' && (
                        <div className="info-box">
                            {/* Add settings content here */}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;
