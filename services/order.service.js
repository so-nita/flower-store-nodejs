const Order = require('../models/order.model');
const OrderDetail = require('../models/orderDetail.model');
const Product = require('../models/product.model');
const Response = require('../dto/response');
const validationResult = require('express-validator');


const getAllAsync = async () => {
    try{
        var orders = await Order.find().include('OrderDetails');
        return Response.success(orders);
    }catch(error){
        return Response.fail(error.message);
    }
};

const getByIdAsync = async (id) => {
    try{
        
    }catch(error){
        return Response.fail(error.message);
    }
};

const createOrderAsync = async (orderData) => {
    try{
        
    }catch(error){
        return Response.fail(error.message);
    }
};





module.exports = {
    getAllAsync,
    getByIdAsync,
    createOrderAsync,
};