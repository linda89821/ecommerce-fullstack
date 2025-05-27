import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/common/Navbar';

const ProductPage = lazy(() => import('./pages/ProductPage'));
const CartPage = lazy(() => import('./pages/CartPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const SignupPage = lazy(() => import('./pages/SignupPage'));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage'));
const OrderHistoryPage = lazy(() => import('./pages/OrderHistoryPage'));
const ProtectedRoute = lazy(() => import('./components/common/ProtectedRoute'));

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <ToastContainer />
      {/* // Lazy Loading code splitting*/}
      <div className="text-2xl text-red-500 font-bold">
  Hello Tailwind!
</div>
      <Suspense fallback={<div style={{ textAlign: 'center', marginTop: '2rem' }}>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/products"element={<ProductPage />}/>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />

          {/* Protected Routes */}
          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <CheckoutPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/orders"
            element={
              <ProtectedRoute>
                <OrderHistoryPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;


