const { Sequelize, DataTypes } = require ('sequelize');

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
            validate: {
                isEmail:true,
            },
        },
        question: {
             type: DataTypes.STRING(200),
            allownull: false,
        },
    },
    {
      tableName: "contact",
      freezeTableName: true,
      timestamps: true,
    }
    );
    return Contact;
};