const { validationResult } = require('express-validator');
const response = require('../dto/response');

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.array().length > 0 ) {
        console.log(errors);

        const message = errors.array()[0].msg;
        return res.status(400).json(response.fail(message));
    }
    //console.log('Validation passed');
    next();
};

module.exports = {
    validate
};
