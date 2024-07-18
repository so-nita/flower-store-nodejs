const { default: mongoose } = require('mongoose');

const orderSchema = new mongoose.Schema({
    //id: { type: Number, required: true },
    discount: { type: Number, required: false },
    total: { type: Number, required: true },
    orderDate: { type: Date, default: Date.now },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Orders', orderSchema);  