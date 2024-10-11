import React from 'react';
import './ChocolatesSidebar.css';

const ChocolatesSidebar = () => {
  const chocolates = [
    "Simple Chocolate",
    "Dark Chocolate",
    "Almond Chocolate",
    "Cashew Chocolate",
    "Vanilla Chocolate",
    "ButterScotch Chocolate",
    "Mix Dry Fruit Chocolate",
    "Mango Chocolate",
    "Apple Chocolate",
  ];

  return (
    <div className="sidebar">
      <ul className='choco-ul'>
        {chocolates.map((chocolate, index) => (
          <li className='choco-list' key={index}>
            <p>{chocolate} <span>&#8250;</span></p>
          </li>
        ))}
      </ul>
      <div className="line"></div>
    </div>
  );
};

export default ChocolatesSidebar;
