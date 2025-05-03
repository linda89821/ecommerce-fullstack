import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { toast } from 'react-toastify';
import axios from 'axios';
import './CheckoutPage.css';

function CheckoutPage() {
  const { cartItems, total, clearCart } = useContext(CartContext);
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    city: '',
    postalCode: '',
    country: ''
  });

  const handleChange = (e) => {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5001/api/orders', {
        items: cartItems,
        total,
        shippingInfo
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });

      toast.success('🎉 Order placed!');
      clearCart();
    } catch (err) {
      toast.error('Order failed');
    }
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <div>
        <h3>Cart Summary</h3>
        {cartItems.map((item, i) => (
          <div key={i}>
            <p>{item.title} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        ))}
        <h4>Total: ${total.toFixed(2)}</h4>
      </div>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Full Name" value={shippingInfo.name} onChange={handleChange} required />
        <input name="address" placeholder="Address" value={shippingInfo.address} onChange={handleChange} required />
        <input name="city" placeholder="City" value={shippingInfo.city} onChange={handleChange} required />
        <input name="postalCode" placeholder="Postal Code" value={shippingInfo.postalCode} onChange={handleChange} required />
        <input name="country" placeholder="Country" value={shippingInfo.country} onChange={handleChange} required />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default CheckoutPage;
