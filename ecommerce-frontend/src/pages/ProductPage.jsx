import React, { useEffect, useState, lazy, Suspense } from 'react';
import axios from 'axios';
const ProductItem = lazy(() => import('../components/product/ProductItem'));
import './ProductPage.css';

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [setLoading] = useState(true);
  const [setError] = useState('');

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load products');
        setLoading(false);
      });
  }, []);

  return (
    <div className="product-page">
      <h1>Products</h1>
      <div className="product-grid">
        {/* Lazy Loading */}
        <Suspense fallback={<div className="product-item-loading">Loading product...</div>}>
          {products.map(product => (
            <ProductItem key={product.id} product={product} />
          ))}
        </Suspense>
      </div>
    </div>
  );
}

export default ProductPage;
