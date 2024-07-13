const express = require('express');
const productController = require('../controllers/product.controller');
const categoryController = require('../controllers/category.controller');

// Api Products
const productRoutes = () => {
    const router = express.Router();
    router.get('/', productController.getAllAsync);
    router.get('/:id', productController.getByIdAsync);
    router.post('/', productController.createAsync);
    router.put('/:id', productController.updateAsync);
    router.delete('/:id', productController.deleteAsync);
    return router;
}

// Api Categories
const categoryRoutes = () => {
    const router = express.Router();
    router.get('/', categoryController.getAllAsync);
    router.get('/:id', categoryController.getByIdAsync);
    router.post('/', categoryController.createAsync);
    router.put('/:id', categoryController.updateAsync);
    router.delete('/:id', categoryController.deleteAsync);
    return router;
}

module.exports = {
    productRoutes,
    categoryRoutes,
};
