import React from 'react'
import circleimg from './Images/circleimg.jpg'
import './comp.css';
import food from './Images/food.webp';
import fork from './Images/fork-spoon.webp';
import delivery from './Images/delivery.jpg';
import { Link } from 'react-router-dom';
import chola_bhatura from './Images/chola_bhatura.webp';
import idli_sambhar from './Images/idli_sambhar.jpg';
import lassi from './Images/lassi.jpg';
import samosa from './Images/samosa.jpeg';
import chach from './Images/chach.webp'
import dahi_samosa from './Images/dahi_samosa.webp';
import sambhar_samosa from './Images/sambhar_samosa.jpg';
import review1 from './Images/review1.jpeg';
import review2 from './Images/review2.avif';
import review3 from './Images/review3.webp';

export default function Landing() {
  return (
    <div className='body'>
           {/* home */}
          <div className='container'>
            <div className='container1'>
            <h1 id='welcome'>Welcome to your <br></br><span>Smart Canteen</span></h1>
            <h2 id='smart-canteen'>Where technology meets taste!<br></br> Enjoy a seamless, personalized dining <br></br>experience designed just for you.</h2>
            <Link to="/login">
            <button>Get Started</button>
            </Link>
            </div>
            <div className='circle-img'>
            <div className='mob-land-sty'></div>
            <img src={circleimg}></img>
            </div>
            <div className='land-style'></div>
          </div>
          
          {/* aboutus */}
          <div className='container2'>

          <div className='left-container'>
          <div className="feature">
          <div className="icon"><img src={food}></img></div>
          <p>Cafeteria at your fingertips</p>
          </div>
          <div className="feature">
          <p>Order dishes online</p>
          <div className="icon" ><img src={fork} id="fork1"></img></div>
          </div>
          <div className="feature">
          <div className="icon"><img src={delivery}></img></div>
          <p>Fastest order prepared with smart delivery</p>
          </div>
          </div>

          <div className='abtus'>
          <h1>AboutUs</h1>
          <p>Our Smart Canteen Management System brings efficiency,<br></br> convenience, and simplicity to your dining experience—whether <br></br>it’s a school cafeteria, a corporate food court, or a bustling <br></br>institutional canteen.
          <span>
          We believe mealtime should be easy and enjoyable.That’s why we’ve designed a system that streamlines everything—from browsing menus and placing orders to tracking inventory and processing payments. No more long lines, manual orders, or stock issues. Just smooth, efficient, and smart management at your fingertips.
          <br></br>
          </span>
          </p>
          </div>
        </div>

        {/* top sellers */}
        <h1 className='heading'>Top Sellers</h1>
        <div className='mobile-heading'>Top Sellers</div>
        <div className='container3 scrollable'>
          <div className='images'>
            <img src={chola_bhatura}></img>
            <p>Chola Bhatura - Rs.50</p>
          </div>
          <div className='images'>
            <img src={idli_sambhar}></img>
            <p>Idli-Sambhar - Rs.30</p>
          </div>
          <div className='images'>
            <img src={samosa}></img>
            <p>Samosa - Rs.20</p>
          </div>
          <div className='images'>
            <img src={lassi}></img>
            <p>Lassi - Rs.15</p>
          </div>
          <div className='images'>
            <img src={chach}></img>
            <p>Chhach - Rs.15</p>
          </div>
          <div className='images'>
            <img src={dahi_samosa}></img>
            <p>Dahi Samosa- Rs.25</p>
          </div>
          <div className='images'>
            <img src={sambhar_samosa}></img>
            <p>Sambhar Samosa- Rs.30</p>
          </div>
        </div>
        
        {/* top-reviews and volunteers */}
        <h1 className='heading1'>Top Reviews and Volunteers</h1>
        <h1 className='mobile-heading1'>Top Reviews and Volunteers</h1>
        <div className='container3 scrollable'>
          <div className='images'>
            <img src={review1}></img>
            <p>Chola Bhatura was nice</p>
          </div>
          <div className='images'>
            <img src={review2}></img>
            <p>Idli-Sambhar was great</p>
          </div>
          <div className='images'>
            <img src={review3}></img>
            <p>Samosa was perfect</p>
          </div>
          <div className='images'>
            <img src={review1}></img>
            <p>Lassi was refreshing</p>
          </div>
          <div className='images'>
            <img src={review2}></img>
            <p>Chhach was good</p>
          </div>
          <div className='images'>
            <img src={review3}></img>
            <p>Dahi Samosa is my favourite</p>
          </div>
          <div className='images'>
            <img src={review1}></img>
            <p>Sambhar Samosa was spicy</p>
          </div>
        </div>
        <footer>
          <div className='footer'>
            <div className='waves'>
              <div className='wave' id='wave'></div>
              <div className='wave' id='wave'></div>
              <div className='wave' id='wave'></div>
              <div className='wave' id='wave'></div>
            </div>
            <div className='row'>
              <div className='col'>
                
              </div>
              <div className='col'>

              </div>

              <div className='col'>
                
              </div>
              <div className='col'>
                
              </div>
            </div>
            <p>&copy; 2024||All rights Received By Quadcore</p>
          </div>
        </footer>
    </div>
  )
}
