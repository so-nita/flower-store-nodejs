const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 4000;

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Set the directory for views
app.set('views', path.join(__dirname, 'views'));

// Function to fetch navigation links
async function fetchNavLinks() {
    try {
        const response = await axios.get('https://so-nita.github.io/mock-api-flowerstore/category.json');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw new Error('Failed to fetch navigation links');
    }
}

// Define a route for the home page
app.get('/', async (req, res) => {
    try {
        const navlinks = await fetchNavLinks();
        res.render('index.view.ejs', {
            title: 'Home Page',
            currentRoute: '/',
            navlinks: navlinks
        });
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
});

// Define a route for the shop page
app.get('/shop', async (req, res) => {
    try {
        const navlinks = await fetchNavLinks();
        res.render('shop.view.ejs', {
            title: 'Shop',
            currentRoute: '/shop',
            navlinks: navlinks
        });
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
