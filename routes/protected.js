const express = require('express');
const authMiddleware = require('../middlewares/auth');
const router = express.Router();

router.use(authMiddleware); // Protect all routes in this file

router.get('/data', (req, res) => {
    res.json({ message: 'This is protected data', user: req.user });
});

module.exports = router;
