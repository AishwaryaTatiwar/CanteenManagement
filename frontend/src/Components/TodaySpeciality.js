import React from 'react';
import './TodaySpeciality.css';

function TodaySpeciality({ title, price, description, imgUrl }) {
  return (
    <div className="special-card">
      <div className="special-text">
        <h1>Today's special!</h1>
        <p>{description}</p>
      </div>
      <div className="special-image">
        <img src={imgUrl} alt={title} />
        <div className="image-caption">
          <p>{title}</p>
          <p>₹ {price}</p>
        </div>
      </div>
    </div>
  );
}
export default TodaySpeciality;
