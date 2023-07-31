const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userController = require('./controllers/userController');
const productController = require('./controllers/productController');
const serviceController = require('./controllers/serviceController');
const cartController = require('./controllers/cartController');
const orderController = require('./controllers/orderController');

const app = express();

// Middleware
app.use(bodyParser.json());

// API routes
app.use('/users', userController);
app.use('/products', productController);
app.use('/services', serviceController);
app.use('/cart', cartController);
app.use('/orders', orderController);

// Connect to the database
mongoose.connect('mongodb://localhost/billing_system', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to the database');
});

module.exports = app;
