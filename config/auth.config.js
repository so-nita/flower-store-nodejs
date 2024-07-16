const jwt = require('jsonwebtoken');
const config = require("../config/auth.config.js");
const User = require("../models/User.js");

const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
};

const generateToken = (user) => {
    return jwt.sign(
        {
            id: user._id,
            isAdmin: user.isAdmin
        },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );
};

const isAdmin = async (req, res, next) => {
    try{
        let user = await User.findByPk(req.userId);
        const role = await user.getRole();
        array.forEach(element => {
            if(element.name === "admin"){
                return next();
            }
        });

        return res.status(403, {message: "Require Admin Role!"});

    }catch(error){
        return res.status(500).send({
            message: "Unable to validate User role!",
        });
    }
};


module.exports = {
    generateToken,
    verifyToken,
    isAdmin
};