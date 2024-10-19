import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import CartDisplay from './CartDisplay';  
import { BsFillCartFill } from 'react-icons/bs'
import './CartPage.css';

const CartPage = () => {
  const location = useLocation();
  const initialCartItems = location.state?.cartItems.map(item => ({
    ...item,
    quantity: 1,  // always starts at 1
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
    updatedItems[index].quantity = newQuantity > 0 ? newQuantity : 1; // quantity can't be zero
    setCartItems(updatedItems);
  };
  const navigate = useNavigate();
  
  const handlePayment= () => {
    navigate('/paymentpage',{ state: { cartItems,totalPrice } });
  };

  return (
    <div className="cart-page">
      <div className='cart-heading'> 
        <BsFillCartFill className="cart-icon1" />
        <h2>Your Food Cart</h2>
      </div>
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
          <button onClick={handlePayment} className="proceed-payment">Proceed to Payment</button>
      </div>
    </div>
  );
};

export default CartPage;
