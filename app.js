const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 4000;

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Set the directory for views
app.set('views', path.join(__dirname, 'views'));
app.set('view options', { debug: true });

// Define a route for the home page
app.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://so-nita.github.io/mock-api-flowerstore/category.json');
        const navlinks = response.data;

        res.render('index.view.ejs', {
            title: 'Home Page',
            currentRoute: '/',
            navlinks
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
    }
});


app.get('/shop', (req, res) => {
    res.render('shop.view.ejs', { title: 'Shop', currentRoute: '/shop' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
