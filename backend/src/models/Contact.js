const { Sequelize, DataTypes } = require ('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

module.exports = (sequelize) => {
    const Contact = sequelize.define(
    'Contact', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        artisan_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Artisan",
                key: "id",
            },
        },
        client_nom: {
            type: DataTypes.STRING(100),
            allownull: false,
        },
        client_email: {
            type: DataTypes.STRING(100),
            allownull: false,
            unique: true,
            validate: {
                isEmail:true,
            },
        },
        question: {
             type: DataTypes.STRING(200),
            allownull: false,
        },
    });
};