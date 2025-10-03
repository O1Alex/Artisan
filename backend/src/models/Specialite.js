const { Sequelize, DataTypes } = require ('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

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
        name:{
            type: DataTypes.STRING(50),
            allowNul: false,
        },
    }
);

module.exports= Specialite;