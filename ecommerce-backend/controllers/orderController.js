const Order = require('../models/Order');
const User = require('../models/User');
const { calculateRebate } = require('../utils/rebateRules');

exports.placeOrder = async (req, res) => {
  const { items, total } = req.body;
  const userId = req.user;
  const { rebateAmount, vipLevel } = calculateRebate(total);

  try {
    const order = new Order({ userId, items, total });
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ msg: 'User not found' });

    user.rebateBalance += rebateAmount;
    if (vipLevel) user.vipLevel = vipLevel;
    await user.save();
    await order.save();
    res.status(200).json({
      message: 'Order placed successfully',
      orderId: order._id,
      rebateAmount,
      newVipLevel: user.vipLevel
    });
  } catch (err) {
    res.status(500).json({ msg: 'Order placement failed' });
  }
};

exports.getUserOrders = async (req, res) => {
  const userId = req.user.id;

  try {
    const orders = await Order.find({ userId }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ msg: 'Failed to fetch orders' });
  }
};
