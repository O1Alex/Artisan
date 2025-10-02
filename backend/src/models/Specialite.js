const { Sequelize, DataTypes } = require ('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Specialite = sequelize.define(
    'Specialite', {


    }
);

module.exports= Specialite;