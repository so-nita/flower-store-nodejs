const User = require('../models/User.js');
const Response = require('../dto/response.js');
const authConfig  = require('../config/auth.config.js');
const validationResult = require('express-validator');
const bcrypt = require('bcryptjs');


const registerAsync = async (userData) => {
    const { username, email, password } = userData;
    try {
        const errors = validationResult<User>(userData);
        if (!errors == null && !errors.isEmpty()) {
            return Response.fail(errors.array().map(err => err.msg));
        }

        let user = await User.findOne({ email });
        if (user) {
            return Response.fail('Email already exists');
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        user = new User({
            username,
            email,
            password: hashedPassword,
            isAdmin: false,
            token: ''
        });

        await user.save();
        return Response.success(user);
    } catch (error) {
        return Response.fail(error.message);
    }
};

const loginAsync = async (userData) => {
    const { email, password } = userData;
    try {
        const errors = validationResult<User>(userData);
        if (!errors == null && !errors.isEmpty()) {
            return Response.fail(errors.array().map(err => err.msg));
        }

        let user = await User.findOne({ email });
        if (!user) {
            return Response.fail('Invalid Credentials');
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return Response.fail('Invalid Credentials');
        }

        const token = authConfig.generateToken(user);
        user.token = token;

        await user.save();

        return Response.success({ token });
    } catch (error) {
        return Response.fail(error.message);
    }
};

module.exports = {
    registerAsync,
    loginAsync
};