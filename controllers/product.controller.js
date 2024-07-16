const productService = require('../services/product.service');

const getAllAsync = async (req, res) => {
    try {
        var products = await productService.getAllAsync();
        console.log(products);
        
        res.status(201).json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getByIdAsync = async (req, res) => {
    try {
        var product = await productService.getByIdAsync(req.params.id);
        if (!product) {
            res.status(404).json({ message: 'Product not found' });
        } else {
            res.status(200).json(product);
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createAsync = async (req, res) => {
    try {
        var newProduct = await productService.createAsync(req.body);
        
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const updateAsync = async (req, res) => {
    try {
        var updatedProduct = await productService.updateAsync(req.params.id, req.body);
        if (!updatedProduct) {
            res.status(404).json({ message: 'Product not found' });
        } else {
            res.status(200).json(updatedProduct);
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const deleteAsync = async (req, res) => {
    var product = await productService.deleteAsync(req.params.id);
    if (product.status != 200) {
        res.status(404).json(product);
    } else {
        res.status(200).json(product);
    }
};

module.exports = {
    getAllAsync,
    getByIdAsync,
    createAsync,
    updateAsync,
    deleteAsync
};
