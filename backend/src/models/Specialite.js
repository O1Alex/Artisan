const { Sequelize, DataTypes } = recquire ('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Specialite = sequelize.define(
    'Specialite', {


    }
);

module.exports= Specialite;