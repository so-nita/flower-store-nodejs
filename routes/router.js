const express = require('express');

const authController = require('../controllers/auth.controller');
const productController = require('../controllers/product.controller');
const categoryController = require('../controllers/category.controller');
const validatorData = require('../middlewares/validatorData');
const { validate } = require('../middlewares/errorHandler');


// Api Auth 
const authRoutes = () => {
    const router = express.Router();
    router.post('/login', validatorData.loginValidationRules, validate, authController.loginAsync);
    router.post('/register', validatorData.registerValidationRules, validate, authController.registerAsync);
    return router;
};

// Api Products
const productRoutes = () => {
    const router = express.Router();
    router.get('/', productController.getAllAsync);
    router.get('/:id', productController.getByIdAsync);
    router.post('/',validatorData.productValidationRules, validate, productController.createAsync);
    router.put('/:id', productController.updateAsync);
    router.delete('/:id', productController.deleteAsync);
    return router;
}

// Api Categories
const categoryRoutes = () => {
    const router = express.Router();
    router.get('/', categoryController.getAllAsync);
    router.get('/:id', categoryController.getByIdAsync);
    router.post('/',  categoryController.createAsync);
    router.put('/:id', categoryController.updateAsync);
    router.delete('/:id', categoryController.deleteAsync);
    return router;
}

module.exports = {
    authRoutes,
    productRoutes,
    categoryRoutes,
};
