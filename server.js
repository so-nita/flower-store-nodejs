require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
// const swaggerUI = require('swagger-ui-express');
// const swaggerSpec = require('./config/swagger');

const app = express();
const port = process.env.PORT || 3001;

const connectDB = require('./config/DbConfig');
const routers = require('./routes/router');

// Connect to the database
connectDB();

// Middlewares
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


// Use routes
app.use('/api/auth', routers.authRoutes());

app.use('/api/products', routers.productRoutes());
app.use('/api/categories', routers.categoryRoutes());


mongoose.connection.once('open', () => {
    console.log('Connected to database');
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
});
