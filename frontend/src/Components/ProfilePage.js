import React, { useState } from 'react';
import './ProfilePage.css';
function ProfilePage() {
    const [showPersonalInfo, setShowPersonalInfo] = useState(false);

    const handlePersonalInfoClick = () => {
        setShowPersonalInfo(true); // Show personal info on click
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
                        <li><a href="#personal-info" onClick={handlePersonalInfoClick}>Personal Info</a></li>
                        <li><a href="/settings">Settings</a></li>
                        <li><a href="/logout">Logout</a></li>
                    </ul>
                    <h3>ACTIVITY</h3>
                    <ul>
                        <li><a href="/order-history">Order history</a></li>
                        <li><a href="/favourites">Favourites</a></li>
                        <li><a href="/reviews">Reviews</a></li>
                        <li><a href="/cart">Cart</a></li>
                        <li><a href="/notifications">Notifications</a></li>
                    </ul>
                </div>

                {/* Personal Info Display */}
                {showPersonalInfo && (
                    <div className="personal-info-box">
                        <h3>Personal Information</h3>
                        <p><strong>Name:</strong> Anthony Gonzalves</p>
                        <p><strong>Phone:</strong> +91 1234567890</p>
                        <p><strong>Email:</strong> anthonyg@example.com</p>
                        <p><strong>Date of Birth:</strong> 12th April 2004</p>
                        <p><strong>Gender:</strong> Male</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProfilePage;
