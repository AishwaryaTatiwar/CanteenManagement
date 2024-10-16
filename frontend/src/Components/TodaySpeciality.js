import React from 'react';
import './TodaySpeciality.css';

function TodaySpeciality({ title, price, description, imgUrl }) {
  return (
    <div className="special-card">
      <div className="special-text">
        <h1>Today's special!</h1>
        <p id='title-price'>{title} ₹{price}</p>
        <p>{description}</p>
      </div>
      <div className="special-image">
        <img src={imgUrl} alt={title} />
      </div>
    </div>
  );
}
export default TodaySpeciality;
