const productService = require('../services/product.service');

const getAllAsync = async () => {
    try
    {
        var products = await productService.getAllAsync();
        return products;
    } 
    catch (error) 
    {
        console.error('Error in product controller:', error);
    }
}

module.exports = {
    getAllAsync
};