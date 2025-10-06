const { Sequelize, DataTypes } = require ('sequelize');

module.exports = (sequelize) =>{
    const Categorie = sequelize.define(
    'Categorie', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nom: {
            type: DataTypes.STRING(100),
            allowNul: false,
        },
        description: {
            type: DataTypes.STRING(200),
            allowNul: false,
        },
    });
};
