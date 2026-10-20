import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

const plantsArray = [
  {
    category: 'Air Purifying Plants',
    plants: [
      {
        name: 'Snake Plant',
        image: 'https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=500&q=60',
        description: 'Famous for its air-purifying qualities and tolerance of low light.',
        cost: 15,
      },
      {
        name: 'Spider Plant',
        image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=500&q=60',
        description: 'A hardy plant that removes toxins from the air and is easy to propagate.',
        cost: 12,
      },
    ],
  },
  {
    category: 'Low Maintenance Plants',
    plants: [
      {
        name: 'ZZ Plant',
        image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&w=500&q=60',
        description: 'Thrives on neglect - perfect for busy people and low-light rooms.',
        cost: 18,
      },
      {
        name: 'Pothos',
        image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=500&q=60',
        description: 'A trailing vine that grows happily in water or soil with minimal care.',
        cost: 10,
      },
    ],
  },
  {
    category: 'Flowering Plants',
    plants: [
      {
        name: 'Peace Lily',
        image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?auto=format&fit=crop&w=500&q=60',
        description: 'Elegant white blooms that also help clean indoor air.',
        cost: 20,
      },
      {
        name: 'Spring Tulip',
        image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=500&q=60',
        description: 'Cheerful spring blooms in soft pink that brighten any windowsill.',
        cost: 14,
      },
    ],
  },
];

function ProductList({ onNavigate }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (plant) => {
    dispatch(addItem({ name: plant.name, image: plant.image, cost: plant.cost }));
    setAddedToCart((prevState) => ({ ...prevState, [plant.name]: true }));
  };

  const isInCart = (name) => cartItems.some((item) => item.name === name) || addedToCart[name];

  return (
    <div className="product-list-container">
      {plantsArray.map((group) => (
        <div key={group.category} className="product-category">
          <h2 className="category-title">{group.category}</h2>
          <div className="product-grid">
            {group.plants.map((plant) => (
              <div key={plant.name} className="product-card">
                <img className="product-image" src={plant.image} alt={plant.name} />
                <h3 className="product-name">{plant.name}</h3>
                <p className="product-description">{plant.description}</p>
                <p className="product-cost">${plant.cost}</p>
                <button
                  className="product-button"
                  onClick={() => handleAddToCart(plant)}
                  disabled={isInCart(plant.name)}
                >
                  {isInCart(plant.name) ? 'Added to Cart' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
