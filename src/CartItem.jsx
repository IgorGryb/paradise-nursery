import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, increaseQuantity, decreaseQuantity } from './CartSlice';

function CartItem({ onContinueShopping }) {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [showCheckoutMsg, setShowCheckoutMsg] = useState(false);

  const totalAmount = cartItems.reduce((total, item) => total + item.cost * item.quantity, 0);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleIncrease = (item) => dispatch(increaseQuantity(item.name));
  const handleDecrease = (item) => dispatch(decreaseQuantity(item.name));
  const handleRemove = (item) => dispatch(removeItem(item.name));
  const handleCheckout = () => setShowCheckoutMsg(true);

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <h2 className="cart-title">Your Cart</h2>
        <p className="cart-empty">Your cart is empty. Total number of plants: 0. Total cost: $0.</p>
        <button className="continue-shopping-btn" onClick={onContinueShopping}>Continue Shopping</button>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>
      <p className="cart-total-items">Total number of plants: {totalItems}</p>
      <p className="cart-total-amount">Total Cost: ${totalAmount}</p>

      <div className="cart-items-list">
        {cartItems.map((item) => (
          <div key={item.name} className="cart-item">
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <h3 className="cart-item-name">{item.name}</h3>
              <p className="cart-item-cost">Unit price: ${item.cost}</p>
              <p className="cart-item-total">Total for this plant: ${item.cost * item.quantity}</p>
              <div className="cart-item-quantity">
                <button className="quantity-btn" onClick={() => handleDecrease(item)}>-</button>
                <span className="quantity-value">{item.quantity}</span>
                <button className="quantity-btn" onClick={() => handleIncrease(item)}>+</button>
              </div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-actions">
        <button className="continue-shopping-btn" onClick={onContinueShopping}>Continue Shopping</button>
        <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
      </div>
      {showCheckoutMsg && (
        <p className="checkout-msg">Coming Soon - checkout is not available yet. Thank you for visiting Paradise Nursery!</p>
      )}
    </div>
  );
}

export default CartItem;
