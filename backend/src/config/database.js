const dotenv = require ('dotenv');
const { Sequelize } = require('sequelize');

// Connexion db
const sequelize = new Sequelize(
    'trouve_ton_artisan', 
    process.env.DB_NAME || "username",
    process.env.DB_PASSWORD || "",
    {
  host: process.env.HOST,
  dialect: 'mariadb',
  port: process.env.HOST,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

module.exports = sequelize;