import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './ProductItem.css';

function ProductItem({ product }) {
  const { addItemToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={() => addItemToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductItem;
