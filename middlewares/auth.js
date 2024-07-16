const verifyAuthorization = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No Authorization token provided.' });
    }
    console.log(token);
    try {
        // Verify Header
        var header = token.split(' ')[1];
        if(header != process.env.JWT_SECRET){
            return res.status(401).json({ message: 'Invalid Authorization Token' });
        }
        next();
    } catch (error) {
        return res.status(401).json({ message: error.message });
    }
};

module.exports = {
    verifyAuthorization
};
