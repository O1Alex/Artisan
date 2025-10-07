const sequelize = require('../config/database');

const Categorie = require('./Categorie')(sequelize);
const Specialite = require('./Specialite')(sequelize);
const Artisan = require('./Artisan')(sequelize);
const Contact = require('./Contact')(sequelize);


//Relations entre les models//
Categorie.hasMany(Specialite, {foreignKey: 'categorie_id',});
Specialite.belongsTo(Categorie, {foreignKey: 'categorie_id',});

Specialite.hasMany(Artisan, {foreignKey: 'specialite_id',});
Artisan.belongsTo(Specialite, {foreignKey: 'specialite_id'});

Artisan.hasMany(Contact, {foreignKey: 'artisan_id',});
Contact.belongsTo(Artisan, {foreignKey: 'artisan_id'});

module.exports = {
    sequelize,
    Artisan, 
    Categorie,
    Contact,
    Specialite,
};