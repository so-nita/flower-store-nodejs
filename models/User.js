const { default: mongoose } = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    token: { type: String, required: false },
    createdAt: { type: Date, default: Date.now },
    isAdmin: { type: Boolean, required: true }
});

module.exports = mongoose.model('User', userSchema);