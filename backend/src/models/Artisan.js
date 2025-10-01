const { Sequelize, DataTypes } = recquire ('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Artisan = sequelize.define(
    'Artisan', {
        id_artisan : {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nom: { 
            type: DataTypes.STRING(100), 
            allowNull: false,
        },
        specialite: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        note: {
            type: DataTypes.DECIMAL(2,1), 
            
        },
        ville: {
            type: DataTypes.STRING(100),
        },
        a_propos: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING(150), 
            unique: true,
        },
        site_web: {
            type: DataTypes.STRING(150), 
        },
        top: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    }
);

module.exports = Artisan;