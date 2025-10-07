const dotenv = require('dotenv')
const { Sequelize } = require('sequelize');
dotenv.config();

// Connexion db
const sequelize = new Sequelize(
    'Trouve_Artisans', 
    process.env.DB_USER || "username",
    process.env.DB_PASSWORD || "",
    {
  host: process.env.HOST,
  dialect: 'mysql',
  port: process.env.HOST,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

module.exports = sequelize;