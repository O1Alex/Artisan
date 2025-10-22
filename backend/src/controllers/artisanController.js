const { matchedData } = require('express-validator');
const artisanService = require('../services/artisanService');

const createArtisan = async(req , res)=> {
    try{
        const artisanData = req.body;

        const newArtisan = await artisanService.createArtisan(artisanData);

        res.json({
            success: true,
            data: newArtisan,
        });
    } catch (error){
     console.error("Erreur lors de la création de l'artisan", error);
        res.status(500).json({
            success: false,
             message: `Erreur serveur ${error.message}`,
        });
    }
};

const getAllArtisans = async(req , res)=> {
    try{ 
        const data = matchedData(req, { locations: ["query"] });
        const { top, limit, categorie_id } = data;
        const filters ={};
        if (top) filters.top = top;
        console.log("filters",filters);

        const artisans = await artisanService.getAllArtisans(filters, limit, categorie_id);

        res.json({
            success: true,
             data: artisans,
      });
    } catch (error) {
        console.error("Erreur lors de la rcuperations des artisans", error);
        res.status(500).json({
            success: false,
             message: `Erreur serveur ${error.message}`,
      });
    } 
};

const getArtisanById = async(req , res)=> {
    try{ 
        const { id } = req.params;

        const artisan = await artisanService.getArtisanById(id);

        res.json({
            success: true,
             data: artisan,
        });
    } catch (error) {
        console.error("Erreur lors de la rcuperations des artisans", error);
        res.status(error.message.includes("non trouvé") ? 404 :500).json({
            success: false,
             message: `Erreur serveur ${error.message}`,
        });
    }
};

const updateArtisanById = async(req , res)=> {
    try{  
        const { id } = req.params;
        const artisanData = req.body;

        const updatedArtisan = await artisanService.updateArtisanById(id, artisanData);

        res.json({
            success: true,
            data: updatedArtisan,
        });
    } catch(error) {
        console.error("Erreur lors de la modification de l'artisan", error);
        res.status(500).json({
            success: false,
             message: `Erreur serveur ${error.message}`,
        });
    }
    
};
const deleteArtisanById = async(req , res)=> {
    try{ 
        const { id } = req.params;

        const artisan = await artisanService.deleteArtisanById(id);

        res.json({
            success: true,
             data: artisan,
        });
    } catch (error) {
        console.error("Erreur lors de la suppression de l'artisan", error);
        res.status(500).json({
            success: false,
             message: `Erreur serveur ${error.message}`,
      });

    }
};
module.exports = {
    createArtisan, 
    getAllArtisans, 
    getArtisanById, 
    updateArtisanById, 
    deleteArtisanById,
};

