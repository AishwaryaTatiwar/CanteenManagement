import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CartDisplay from './CartDisplay';  
import './CartPage.css';

const CartPage = () => {
  const location = useLocation();
  const initialCartItems = location.state?.cartItems.map(item => ({
    ...item,
    quantity: 1,  // always value 1 se start hogi
  })) || [];

  const [cartItems, setCartItems] = useState(initialCartItems);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    calculateTotalPrice();
  }, [cartItems]);

  const calculateTotalPrice = () => {
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(total);
  };

  const handleQuantityChange = (index, newQuantity) => {
    const updatedItems = [...cartItems];
    updatedItems[index].quantity = newQuantity > 0 ? newQuantity : 1; // aur ye 0 bhi nahi ho sakti
    setCartItems(updatedItems);
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <div className="cart-items-container">
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <CartDisplay 
              key={index}
              Img={item.url} 
              foodName={item.title} 
              price={item.price} 
              quantity={item.quantity}
              onQuantityChange={(newQuantity) => handleQuantityChange(index, newQuantity)}
            />
          ))
        ) : (
          <p>Your cart is empty!</p>
        )}
      </div>
      <div className="total-section">
        <h3>Total Price: Rs. {totalPrice}</h3>
        <button className="proceed-payment">Proceed to Payment</button>
      </div>
    </div>
  );
};

export default CartPage;

