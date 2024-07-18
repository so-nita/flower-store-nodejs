const Auth = require('../services/auth.service');


const registerAsync = async (req, res) => {
    var data = await Auth.registerAsync(req.body);
    if(data.status != 200){
        return res.status(400).json(data);
    }

    return res.status(data.status).json(data);
};

const loginAsync = async (req, res) => {
    console.log(req.headers.authorization);
    
    if (!req.headers.authorization) {
        return res.status(401).send({ message: 'Invalid Authorization header' });
    }
    var data = await Auth.loginAsync(req.body);
    if(data.status != 200){
        return res.status(400).json(data);
    }

    return res.status(data.status).json(data);
};


module.exports = {
    registerAsync,
    loginAsync
};