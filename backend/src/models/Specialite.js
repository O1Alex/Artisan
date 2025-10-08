const { Sequelize, DataTypes } = require ('sequelize');

module.exports = (sequelize) => {
    const Specialite = sequelize.define(
    'Specialite', {
         id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nom:{
            type: DataTypes.STRING(50),
            allowNul: false,
        }, 
        categorie_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: "Categorie",
                key: "id",
            },
        },    
    },
    {
      tableName: "specialite",
      freezeTableName: true,
      timestamps: true,
    }
);
    return Specialite;
};
