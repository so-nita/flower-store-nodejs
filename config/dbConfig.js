const mongoose = require('mongoose');

const connectDb = () => {
    return mongoose.connect(Database.fromEnv(), {
        userNewUrlParser: true,
        useUnifiedTopology: true,
    })
} 

module.exports = connectDb;