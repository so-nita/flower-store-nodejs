const Product = require('../models/Product');
const Response = require('../dto/response');
const { validationResult } = require('express-validator');

const getAllAsync = async () => {
    try {
        let products = await Product.find();
        //return { success: true, data: products };
        return Response.success(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        return { success: false, error: error.message };
    }
};

const getByIdAsync = async (id) => {
    try {
        let product = await Product.findById(id);
        return Response.SuccessResponse(product);
    } catch (error) {
        return Response.fail(error.message);
    }
};

const createAsync = async (product) => {
    try {
        // let Validate = validationResult<Product>(product);
        // console.log(Validate);
        // if(Validate.fails())
        // {
        //     return Response.fail(Validate.errors.all());
        // }
        const errors = validationResult(product);
        if (!errors.isEmpty()) {
            return Response.fail(errors.array().map(err => err.msg));
        }
        let newProduct = await Product.create(product);
        console.log(newProduct);

        return Response.success(newProduct);
    } catch (error) {
        console.error('Error creating product:', error);
        return { success: false, error: error.message };
    }
};


const updateAsync = async (id, product) => {
    try {
        let updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
        return Response.success(updatedProduct);
    } catch (error) {
        return Response.fail(error);
    }
};

const deleteAsync = async (id) => {
    try {
        let product = await Product.findByIdAndDelete(id);
        return Response.success(product);
    } catch (error) {
        return Response.fail(error);
    }
};

module.exports = {
    getAllAsync,
    getByIdAsync,
    createAsync,
    updateAsync,
    deleteAsync
};