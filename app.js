const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Set the directory for views
app.set('views', path.join(__dirname, 'views'));

// Define a route for the home page
app.get('/', (req, res) => {
    const currentRoute = req.path;
    res.render('index.view.ejs', { title: 'Home Page', currentRoute: '/' });
});

app.get('/shop', (req, res) => {
    res.render('shop.view.ejs', { title: 'Shop', currentRoute: '/shop' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
