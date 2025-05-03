import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './Navbar.css';

function Navbar() {
  const totalItems = useContext(CartContext)?.cartItems?.length || 0;
  const userName = localStorage.getItem('name');

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/orders">Orders</Link></li>
        <li><Link to="/checkout">Checkout</Link></li>
        <li className="nav-cart">
          <Link to="/cart">🛒 Cart {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}</Link>
        </li>
        <div className="nav-right">
          {userName ? (
            <>
              <span>👤 Welcome, {userName}</span>
              <button onClick={handleLogout} className="logout-btn">Logout</button>
            </>
          ) : (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
            </>
          )}
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
