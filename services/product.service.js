const Product = require('../models/Product');
const Response = require('../dto/response');
const { validate } = require('../models/Category');

const getAllAsync = async () => {
    try {
        let products = await Product.find();
        return Response.success(products);
    } catch (error) {
        return Response.fail(error);
    }
};

const getByIdAsync = async (id) => {
    try {
        let product = await Product.findById(id);
        return Response.SuccessResponse(product);
    } catch (error) {
        return Response.fail(error);
    }
};

const createAsync = async (product) => {
    try {
        // Validate the product object
        const { error, value } = productSchema.validate(product);
        if (error) {
            return Response.fail(error.details[0].message);
        }

        // Create the product
        let newProduct = await Product.create(value);
        console.log(newProduct);

        return Response.SuccessResponse(newProduct);
    } catch (error) {
        return Response.fail(error);
    }
};

const updateAsync = async (id, product) => {
    try {
        let updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
        return Response.SuccessResponse(updatedProduct);
    } catch (error) {
        return Response.fail(error);
    }
};

const deleteAsync = async (id) => {
    try {
        let product = await Product.findByIdAndDelete(id);
        return Response.SuccessResponse(product);
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