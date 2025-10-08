const { DataTypes } = require("sequelize");
 
module.exports = (sequelize) => {
  const Categorie = sequelize.define(
    "Categorie",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nom: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    },
    {
      tableName: "categorie",
      freezeTableName: true,
      timestamps: true,
    }
  );
 
  return Categorie;
};