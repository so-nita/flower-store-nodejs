const Product = require('../models/Product');
const Response = require('../dto/response')

const getAllAsync = async () => {
    try {
        let products = await Product.find();
        return Response.SuccessResponse(products);
    } catch (error) {
        console.error('Error in product service:', error);
    }
};