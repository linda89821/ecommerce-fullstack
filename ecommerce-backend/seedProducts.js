// seedProducts.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');
dotenv.config();

const products = [
  {
    title: "Wireless Headphones",
    price: 59.99,
    description: "High-quality wireless headphones with noise cancellation.",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    category: "electronics",
  },
  {
    title: "Slim Fit T-Shirt",
    price: 22.99,
    description: "Premium cotton slim-fit T-shirt for daily comfort.",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    category: "clothing",
  },
  {
    title: "Running Sneakers",
    price: 79.99,
    description: "Lightweight and breathable sneakers for everyday jogging.",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    category: "shoes",
  },
  {
    title: "Elegant Leather Handbag",
    price: 89.50,
    description: "Stylish leather handbag perfect for casual or formal wear.",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    category: "accessories",
  },
  {
    title: "Smartwatch Pro X",
    price: 129.99,
    description: "Advanced smartwatch with fitness tracking and Bluetooth.",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    category: "electronics",
  },
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Product.deleteMany(); // Clear existing products
    await Product.insertMany(products);
    console.log('✅ Products seeded successfully!');
    process.exit();
  } catch (err) {
    console.error('❌ Seeding failed:', err.message);
    process.exit(1);
  }
};

seedDB();
