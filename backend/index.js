const path = require('path');
const express = require('express');
const app = express();
const color = require('colors');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 3020;
const { errorHandler } = require('./middleware/errorMiddleware');
const goalRoutes = require('./routes/goalRoutes');
const userRoutes = require('./routes/userRoutes');

// DB CONNECTION
const connectDB = require('./config/db');
connectDB();

// MIDDLE WARE
app.use(express.json()); // For req.body
app.use(express.urlencoded({ extended: false })); // For req.params
app.use(errorHandler); //to make override default errorhandler

// ROUTES
app.use('/api/goals', goalRoutes);
app.use('/api/users', userRoutes);


// LISTEN SERVER
app.listen(() => {
  console.log(`Server startd`);
});
