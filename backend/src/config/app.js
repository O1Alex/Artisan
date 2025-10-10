require ('dotenv').config;

module.exports = {
    corsOptions: {
        origin: process.env.CORS_ORIGIN || 'http://localhost:8080',
        optionsSuccessStatus: 200,
    },
};