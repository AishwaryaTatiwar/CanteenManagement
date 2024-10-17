import React, { useState } from 'react';
import './ProfilePage.css';

function ProfilePage() {
    const [activeTab, setActiveTab] = useState('personal-info'); // Set the default active tab

    const handleTabClick = (tab) => {
        setActiveTab(tab); // Update the active tab on click
    };

    return (
        <div className="profile-page">
            {/* Profile Banner */}
            <div className="profile-banner">
                <div className="profile-details">
                    <div className="profile-image">
                        <img src='https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg' alt="Profile" />
                    </div>
                    <div className="profile-name">Anthony Gonzalves</div>
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
                            <p><strong>Name:</strong> Anthony Gonzalves</p>
                            <p><strong>Phone:</strong> +91 1234567890</p>
                            <p><strong>Email:</strong> anthonyg@example.com</p>
                            <p><strong>Date of Birth:</strong> 12th April 2004</p>
                            <p><strong>Gender:</strong> Male</p>
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
                            <p>You have not placed any order</p>
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
                            
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;