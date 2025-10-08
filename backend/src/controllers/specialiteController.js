const specialiteService = require('../services/specialiteService');

const createSpecialite = async(req , res)=> {
    try {
        const specialiteData = req.body;

        const newSpecialite = await specialiteService.createSpecialite(specialiteData);

        res.json({
            success: true,
            data: newSpecialite,
        });
    } catch (error) {
        console.error("Erreur lors de la création de la specialite", error);
        res.status(500).json({
            success: false,
             message: `Erreur serveur ${error.messsage}`,
        });  
    }
};
const getAllSpecialites = async(req , res)=> {
     try {
        const specialites = await specialiteService.getAllSpecialites();
        res.json({
            success: true,
            data: specialites,
        });
    } catch (error) {
        console.error("Erreur lors de la récupération des specialites", error);
        res.status(500).json({
            success: false,
             message: `Erreur serveur ${error.messsage}`,
        });
    }
};
const getSpecialiteById = async(req , res)=> {
     try {
        const { id } = req.params;

        const specialite = await specialiteService.getSpecialiteById(id);
        res.json({
            success: true,
            data: specialite,
        });
    } catch (error) {
        console.error("Erreur lors de la récupération de la specialite", error);
        res.status(500).json({
            success: false,
             message: `Erreur serveur ${error.messsage}`,
        });        
    }
};
const updateSpecialiteById = async(req , res)=> {
    try {
        const { id } = req.params;
        const specialiteData = req.body;

        const updatedSpecialite = await specialiteService.updateSpecialiteById(id, specialiteData);
        
        res.json({
            success: true,
            data: updatedSpecialite,
    });
    } catch (error) {
        console.error("Erreur lors de la modification de la specialite", error);
        res.status(500).json({
            success: false,
             message: `Erreur serveur ${error.messsage}`,
        }); 
    }
};
const deleteSpecialiteById = async(req , res)=> {
    try {
        const { id } = req.params;

        const specialite = await specialiteService.deleteSpecialiteById(id);

        res.json({
            success: true,
            data: specialite,
    });
    } catch (error) {
        console.error("Erreur lors de la suppression de la specialite", error);
        res.status(500).json({
            success: false,
             message: `Erreur serveur ${error.messsage}`,
        });
        
    }
};

module.exports = {
    createSpecialite, 
    getAllSpecialites, 
    getSpecialiteById, 
    updateSpecialiteById, 
    deleteSpecialiteById,
};
