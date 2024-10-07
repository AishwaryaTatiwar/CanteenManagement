import React from 'react';
import './Dashboardcards.css';

function DashboardCards() {
  const cardsData = [
    { icon: '🍽️', count: 40, title: 'Dishes' },
    { icon: '👤', count: 40, title: 'Users' },
    { icon: '📦', count: 4, title: 'Delivered Orders' },
    { icon: '📃', count: 15, title: 'Pending orders' },
    { icon: '❌', count: 2, title: 'Cancelled Orders' },
    { icon: '🍲', count: 8, title: 'Categories' },
  ];

  return (
    <div className="dashboard-cards">
      {cardsData.map((card, index) => (
        <div className="card" key={index}>
          <span className="card-icon">{card.icon}</span>
          <div className="card-content">
            <h3>{card.count}</h3>
            <p>{card.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DashboardCards;
