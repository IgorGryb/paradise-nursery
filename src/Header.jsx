import React from 'react';
import { useSelector } from 'react-redux';

function Header({ onNavigate }) {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="header">
      <div className="header-logo" onClick={() => onNavigate('landing')}>
        <span className="header-logo-icon">&#127807;</span>
        <span className="header-company-name">Paradise Nursery</span>
      </div>
      <nav className="header-nav">
        <button className="header-link" onClick={() => onNavigate('landing')}>Home</button>
        <button className="header-link" onClick={() => onNavigate('plants')}>Plants</button>
        <button className="header-link cart-link" onClick={() => onNavigate('cart')} aria-label="Go to cart">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="26" height="26">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <span className="cart-count">{totalItems}</span>
        </button>
      </nav>
    </header>
  );
}

export default Header;
