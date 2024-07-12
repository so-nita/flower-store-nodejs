// config/swagger.js
const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Flower Store API',
            version: '1.0.0',
            description: 'API documentation for Flower Store Node.js application'
        },
        servers: [
            {
                url: 'http://localhost:3001', // Change this to your server URL if different
            },
        ],
    },
    apis: ['./routes/*.js'], // Path to the API docs
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);

module.exports = swaggerSpec;
