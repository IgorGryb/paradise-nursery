import React, { useState } from 'react';
import AboutUs from './AboutUs';
import ProductList from './ProductList';
import CartItem from './CartItem';
import Header from './Header';
import './App.css';

function App() {
  const [page, setPage] = useState('landing');

  const navigate = (target) => setPage(target);

  if (page === 'landing') {
    return (
      <div className="landing-page">
        <div className="landing-content">
          <h1 className="landing-company-name">Paradise Nursery</h1>
          <p className="landing-tagline">Where Green Meets Serenity</p>
          <AboutUs />
          <button className="get-started-btn" onClick={() => navigate('plants')}>
            Get Started
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <Header onNavigate={navigate} />
      {page === 'plants' && <ProductList onNavigate={navigate} />}
      {page === 'cart' && <CartItem onContinueShopping={() => navigate('plants')} />}
    </div>
  );
}

export default App;
