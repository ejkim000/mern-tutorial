const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 3020;
const app = express();
const goalRoutes = require('./routes/goalRoutes');


app.use('/api/goals', goalRoutes);

app.listen(PORT, ()=> {
    console.log(`Server startd on port ${PORT}`);
})
