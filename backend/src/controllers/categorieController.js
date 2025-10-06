const categorieService = require('../services/categorieService');

const createCategorie = async(req , res)=> {
    try {
        const categorieData = req.body;

        const newCategorie = await categorieService.createCategorie(categorieData);

        res.json({
        success: true,
        data: newCategorie,
        });
    } catch (error) {
        console.error("Erreur lors de la création de la catégorie", error);
        res.status(500).json({
            success: false,
             message: `Erreur serveur ${error.messsage}`,
        });
    }
};
   
const getAllCategories = async(req , res)=> {
    try {
        const categories = await categorieService.getAllCategories();

        res.json({
        success: true,
        data: categories,
    });
    } catch (error) {
        console.error("Erreur lors de la récupération des catégories", error);
        res.status(500).json({
            success: false,
             message: `Erreur serveur ${error.messsage}`,
        });        
    }
};
    
const getCategorieById = async(req , res)=> {
    try {
        const { id } = req.params;

        const categorie = await categorieService.getCategorieById(id);

        res.json({
            success: true,
            data: categorie,
        });
    } catch (error) {
        console.error("Erreur lors de la récupération de la catégorie", error);
        res.status(500).json({
            success: false,
             message: `Erreur serveur ${error.messsage}`,
        });        
    }
};

const updateCategorieById = async(req , res)=> {
    try {
        const { id } = req.params;
        const categorieData = req.body;

        const updatedCategorie = await categorieService.updateCategorieById(categorieData);

        res.json({
            success: true,
            data: updatedCategorie,
    });
   } catch (error) {
        console.error("Erreur lors de la modification de la catégorie", error);
        res.status(500).json({
            success: false,
             message: `Erreur serveur ${error.messsage}`,
        });        
    }
};

const deleteCategorieById = async(req , res)=> {
    try {
        const { id } = req.params;

        const categorie = await categorieService.deleteCategorieById(id);

        res.json({
            success: true,
            data: categorie,
    });
       } catch (error) {
        console.error("Erreur lors de la suppression de la catégorie", error);
        res.status(500).json({
            success: false,
            message: `Erreur serveur ${error.messsage}`,
        });        
    }
};

module.exports = {
    createCategorie, 
    getAllCategories, 
    getCategorieById, 
    updateCategorieById, 
    deleteCategorieById,
};
