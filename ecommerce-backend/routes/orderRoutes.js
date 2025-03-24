const express = require('express');
const router = express.Router();
const { placeOrder, getUserOrders } = require('../controllers/orderController');
const protect = require('../middleware/authMiddleware');

router.post('/', protect, placeOrder);         // POST /api/orders
router.get('/my-orders', protect, getUserOrders); // GET /api/orders/my-orders

module.exports = router;
