const { Sequelize, DataTypes } = require ('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Categorie = sequelize.define(
    'Categorie', {
        id_categorie: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        libelle:{
            type: DataTypes.STRING(50),
            allowNul: false,
        },
    }
);

module.exports= Categorie;