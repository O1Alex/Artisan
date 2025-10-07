const { Sequelize, DataTypes } = require ('sequelize');

module.exports = (sequelize) => {
    const Specialite = sequelize.define(
    'Specialite', {
         id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        categorie_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: "Categorie",
                key: "id",
            },
        },
        nom:{
            type: DataTypes.STRING(50),
            allowNul: false,
        },
        description: {
            type: DataTypes.STRING(200),
            allowNul: false,
        },
    });
    return Specialite;
};
