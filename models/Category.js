const { default: mongoose } = require('mongoose');

const categorySchema = new mongoose.Schema({
    //id: { type: Number, required: true },
    name: { type: String, required: true },
    description: { type: String, required: false },
    image: { type: String, required: false },
    createdAt: { type: Date, default: Date.now, required: false },
});

module.exports = mongoose.model('Categories', categorySchema);