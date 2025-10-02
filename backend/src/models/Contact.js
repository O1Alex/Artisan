const { Sequelize, DataTypes } = require ('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Contact = sequelize.define(
    'Contact', {
        customer_Name{
            type: DataTypes.STRING(100),
            allownull: false,
        },
        customer_Email{
            type: DataTypes.STRING(100),
            allownull: false,
             validate: {
                isEmail:true
            },

        },
    }
);