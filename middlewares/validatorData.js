const { body } = require('express-validator');

const registerValidationRules = [
    body('username').not().isEmpty().withMessage('Username is required'),
    body('email').isEmail().withMessage('Email is invalid'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
];

const loginValidationRules = [
    body('email').isEmail().withMessage('Email is invalid'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
];

const productValidationRules = [
    body('name').notEmpty().withMessage('Name is required'),
    body('price').isNumeric().withMessage('Price must be a number'),
    body('description').optional({ nullable: true }).isString(),
    body('image').notEmpty().withMessage('Image is required'),
    body('categoryId').notEmpty().withMessage('Category is required').isMongoId().withMessage('Category must be a valid ID'),
];

const categoryValidationRules = [
    body('name').notEmpty().withMessage('Name is required'),
    body('description').optional({ nullable: true }),
];

module.exports = {
    categoryValidationRules
};

module.exports = {
    registerValidationRules,
    loginValidationRules,
    productValidationRules,
    categoryValidationRules
};
