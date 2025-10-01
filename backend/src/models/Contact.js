const { Sequelize, DataTypes } = recquire ('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Contact = sequelize.define(
    'Contact', {

    }
);