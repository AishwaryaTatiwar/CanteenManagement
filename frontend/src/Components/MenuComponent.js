import React from 'react';
import './MenuComponent.css';

function MenuComponent({ url, title, price, onAddToCart }) {
  return (
    <div>
      <div className='box'>
        <img src={url} alt='food' height={150} width={150} />
        <div className='details'>
          <div className='detailsPara'>
            <p>{title}</p>
            <p>Price Rs.{price}</p>
          </div>
          <button onClick={onAddToCart}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default MenuComponent;
