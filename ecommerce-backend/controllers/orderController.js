const Order = require('../models/Order');

exports.placeOrder = async (req, res) => {
  const { items, total } = req.body;
  const userId = req.user;

  try {
    const order = new Order({ userId, items, total });
    await order.save();
    res.status(201).json({ msg: 'Order placed successfully', order });
  } catch (err) {
    res.status(500).json({ msg: 'Order placement failed' });
  }
};

exports.getUserOrders = async (req, res) => {
  const userId = req.user;

  try {
    const orders = await Order.find({ userId }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ msg: 'Failed to fetch orders' });
  }
};
