import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Food from './FoodItems';
import MenuComponent from './MenuComponent';
import Cart from './Cart';
import TodaySpeciality from './TodaySpeciality';
import Carousel from './Carousel';
//  import './Menu.css';

function Menu() {
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();  // Hook to navigate programmatically

  // Filter food by search query
  const filteredFood = Food.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Add to cart and update the cart count
  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  // Navigate to CartPage with the cart items
  const handleOrderNow = () => {
    navigate('/cart', { state: { cartItems } });
  };

  return (
    <div>
      <div className='top'>
        <p>Hey xyz, Good Afternoon!</p>
        <input
          type="text"
          className='search-bar'
          placeholder="Search food by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <Carousel />
      {/* Render menu items based on search or categories */}
      {searchQuery ? (
        <>
          <h3>Search Results</h3>
          <div className='menu-container'>
            {filteredFood.length > 0 ? (
              filteredFood.map((item, index) => (
                <MenuComponent
                  key={index}
                  url={item.url}
                  title={item.title}
                  price={item.price}
                  onAddToCart={() => handleAddToCart(item)}
                />
              ))
            ) : (
              <p>No items found</p>
            )}
          </div>
        </>
      ) : (
        <>
          {/* Indian category */}
          <h3>Indian</h3>
          <div className='menu-container'>
            {Food.filter((item) => item.class === 'Indian').map((item, index) => (
              <MenuComponent
                key={index}
                url={item.url}
                title={item.title}
                price={item.price}
                onAddToCart={() => handleAddToCart(item)}
              />
            ))}
          </div>

          {/* Italian category */}
          <h3>Italian</h3>
          <div className='menu-container'>
            {Food.filter((item) => item.class === 'Italian').map((item, index) => (
              <MenuComponent
                key={index}
                url={item.url}
                title={item.title}
                price={item.price}
                onAddToCart={() => handleAddToCart(item)}
              />
            ))}
          </div>

          {/* Chinese category */}
          <h3>Chinese</h3>
          <div className='menu-container'>
            {Food.filter((item) => item.class === 'Chinese').map((item, index) => (
              <MenuComponent
                key={index}
                url={item.url}
                title={item.title}
                price={item.price}
                onAddToCart={() => handleAddToCart(item)}
              />
            ))}
          </div>

          {/* South Indian category */}
          <h3>South-Indian</h3>
          <div className='menu-container'>
            {Food.filter((item) => item.class === 'South-Indian').map((item, index) => (
              <MenuComponent
                key={index}
                url={item.url}
                title={item.title}
                price={item.price}
                onAddToCart={() => handleAddToCart(item)}
              />
            ))}
          </div>
        </>
      )}
    <div className="last">
      <Cart cartCount={cartItems.length} />

      <button onClick={handleOrderNow} className="order-now-button">
        Order Now
      </button>
    </div>
    </div>
  );
}

export default Menu;
