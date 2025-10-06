const { Sequelize, DataTypes } = require ('sequelize');
const { Artisan } = require('.');

module.exports = (sequelize)=> { 
    const Artisan = sequelize.define(
    'Artisans', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nom: { 
            type: DataTypes.STRING(100), 
            allowNull: false,
        },
        specialite_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: "Specialite",
                key: "id",
            }
        },
        note: {
            type: DataTypes.DECIMAL(2,1), 
            validate:{
                min: 0, 
                max: 5,
            },
        },
        ville: {
            type: DataTypes.STRING(100),
            allownull: false,
        },
        description: {
            type: DataTypes.STRING(200),
        },
        email: {
            type: DataTypes.STRING(100), 
            unique: true,
            allowNull: false,
            validate: {
                isEmail:true
            }
        },
        site_web: {
            type: DataTypes.STRING(150),
            validate: {
                isUrl:true
            }
        },
    });
    return Artisan;
};

module.exports = Artisan;