const jwt = require('jsonwebtoken');
const User = require("../models/User.js");

const verifyToken = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;  // Attach the decoded user object to the request
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token.' });
    }
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