const { default: mongoose } = require('mongoose');

const orderDetailSchema = new Schema({
    order: { type: Schema.Types.ObjectId, ref: 'Order' },
    product: { type: Schema.Types.ObjectId, ref: 'Product' },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, required: false },
    subTotal: { type: Number, required: true },
    total: { type: Number, required: true },
    orderDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('OrderDetail', orderDetailSchema);