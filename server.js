const express = require('express');
const app = express();
const port = 3000;

const connectDb = require('./config/DbConfig');

// Connect to the database
connectDB();

mongoose.connection.once('open', ()=>{
    console.log('Connected to database');
    app.listen(port, ()=> {
        console.log(`Server is running on port ${port}`);
    })
});