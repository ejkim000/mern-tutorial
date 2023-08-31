const express = require('express');
const app = express();
const color = require('colors');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 3020;
const goalRoutes = require('./routes/goalRoutes');
const userRoutes = require('./routes/userRoutes');

// ERROR HANDLER : leave here make it affect all 
const { errorHandler } = require('./middleware/errorMiddleware');

// DB CONNECTIIB
const connectDB = require('./config/db');
connectDB();

// MIDDLEWARE
app.use(express.json()); // For req.body
app.use(express.urlencoded({extended: false})); // For req.params
app.use(errorHandler); //to make override default errorhandler

// ROUTES
app.use('/api/goals', goalRoutes);
app.use('/api/users', userRoutes);

// LISTEN SERVER
app.listen(PORT, ()=> {
    console.log(`Server startd on port ${PORT}`);
})