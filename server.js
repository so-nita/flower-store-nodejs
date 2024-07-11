const express = require('express');
const app = express();
const port = 3000;

const connectDb = require('./config/DbConfig');

// Connect to the database
connectDb();


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})