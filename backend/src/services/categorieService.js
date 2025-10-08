const { createCategorie, 
    getCategorieById, 
    deleteCategorieById,
    getAllCategories,
    updateCategorieById,
    } = require("../controllers/categorieController");

const { Categorie } = require("../models");

class categorieService {

//Créer une Catégorie//
    static async createCategorie(categorieData){
        try { 
            const newCategorie = Categorie.create(categorieData);
            return newCategorie;

        } catch (err) {
            throw new Error (`Erreur lors de la creation de la categorie${err.message}`);
        }
    };

//Récupérer toutes les catégories//
    static async getAllCategories(){
        try {
            const categories = Categorie.findAll();
            return categories;

        } catch (err) {
            throw new Error(`Erreur lors de la récupération des categories ${err.message}`);
        }
    };

//Récupérer une catégorie par son id//
    static async getCategorieById(id) {
        try {
            const categorie = Categorie.findByPk(id)
            return categorie;
            
        } catch (err) {
            throw new Error(`Erreur lors de la récupération de la catégorie ${err.message}`);
        }
    };

//Modifier une catégorie existante//
    static async updateCategorieById(id, categorieData){
        try {
            const categorie = await Categorie.findByPk(id);
            if (!Categorie){
                throw new Error(`Categorie ${id} non trouvé`);
            }
            await categorie.update(categorieData);
            return {categorie, ...categorieData};

        } catch (err) {
            throw new Error(`Erreur lors de la modification de la categorie ${err.message}`);
        }
    };

//Supprimer une catégorie//
    static async deleteCategorieById(id) {
        try {
            const categorie = await Categorie.findByPk(id)
        if (!categorie) {
                throw new Error(`Categorie ${id} non trouvé`);
            }
         await Categorie.destroy({
                where:{id:id},
        });
        return categorie;

        }catch (err) {
            throw new Error(`Erreur lors de la suppression de la categorie${err.message}`);
        }
    };
};

module.exports = categorieService;