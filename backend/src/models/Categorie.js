const { Sequelize, DataTypes } = require ('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Categorie = sequelize.define(
    'Categorie', {
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
        nom: {
            type: DataTypes.STRING(100),
            allowNul: false,
        },
    }
);

module.exports= Categorie;