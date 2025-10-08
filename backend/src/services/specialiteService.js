const { createSpecialite, 
    getSpecialiteById, 
    deleteSpecialiteById,
    getAllSpecialites,
    updateSpecialiteById,
    } = require("../controllers/specialiteController");

const { Specialite, Categorie } = require ("../models");

class specialiteService {

//Créer une specialite//
    static async createSpecialite(specialiteData){
        try {
            const newSpecialite = Specialite.create(specialiteData);
            return newSpecialite;
        } catch (err) {
            throw new Error (`Erreur lors de la création de la specialite${err.message}`);
        }
    };

//Récupérer toutes les specialites//
    static async getAllSpecialites(filter= {}){
        try {
            const options = { 
                include : { model : Categorie } };
                if (Object.keys(filter).lenght > 0){
                    options.where = filter;
                };
            const specialites = Specialite.findAll(options);
            return specialites;
        } catch (err) {
            throw new Error (`Erreur lors de la récupération des specialites${err.message}`);
        }
    };
    
//Récupérer une specialite par son id//
    static async getSpecialiteById(id) {
        try {
            const specialite = Specialite.findByPk(id, { include : { model : Categorie } });
            return specialite;
            
        } catch (err) {
            throw new Error (`Erreur lors de la recuperation de la specialite${err.message}`);
        }
    };
//Modifier une specialite//
    static async updateSpecialiteById(id, specialiteData){
        try {
            const specialite = await Specialite.findByPk(id);
            if (!Specialite){
                throw new Error(`Specialite ${id} non trouvé`);
            }
            await specialite.update(specialiteData);
            return {specialite, ...specialiteData};

        } catch (err) {
            throw new Error (`Erreur lors de la modification de la specialite${err.message}`);
        }
    };
//Supprimer une specialite//
    static async deleteSpecialiteById(id){
        try {
            const specialite = await Specialite.findByPk(id);
            if (!Specialite){
                throw new Error(`Specialite ${id} non trouvé`);
            }
            await Specialite.destroy({
                where:{ id:id},
            });

        } catch (err) {
            throw new Error (`Erreur lors de la suppression de la specialite${err.message}`);
        }
    }; 
};

module.exports = specialiteService;