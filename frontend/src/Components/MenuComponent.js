import React, { useState } from 'react';
import './MenuComponent.css';
import { FaHeart, FaRegHeart } from 'react-icons/fa'; // Import heart icons

function MenuComponent({ url, title, price, onAddToCart }) {
  const [isLiked, setIsLiked] = useState(false); // Track heart icon state

  // Toggle heart color on click
  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="box">
      <div className="image-container">
        <img src={url} alt="food" />
        <span className="heart-icon" onClick={handleLike}>
          {isLiked ? <FaHeart style={{ color: 'pink' }} /> : <FaRegHeart />}
        </span>
      </div>
      <div className="details">
        <div className="detailsPara">
          <p className="food-title">{title}</p>
          <p className="food-price">₹ {price}</p>
        </div>
        <button onClick={onAddToCart}>Add</button>
      </div>
    </div>
  );
}

export default MenuComponent;
