const artisanService = require('../services/artisanService');

const createArtisan = async(req , res)=> {
    try{
        const artisanData = req.body;

        const newArtisan = await artisanService.createArtisan(artisanData);

        res.json({
            success: true,
            data: newArtisan,
        });
    } catch (err){
     console.error("Erreur lors de la création de l'artisan", error);
        res.status(500).json({
            success: false,
             message: `Erreur serveur ${error.messsage}`,
        });
    }
};9


const getAllArtisans = async(req , res)=> {
    try{ 
        const artisans = await artisanService.getAllArtisans();

        res.json({
            success: true,
             data: artisans,
      });
    } catch (err) {
        console.error("Erreur lors de la rcuperations des artisans", error);
        res.status(500).json({
            success: false,
             message: `Erreur serveur ${error.messsage}`,
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
             message: `Erreur serveur ${error.messsage}`,
        });
    }
};

const updateArtisanById = async(req , res)=> {
    try{  
        const { id } = req.params;
        const artisanData = req.body;

        const updatedArtisan = await artisanService.updateArtisanById(artisanData);

        res.json({
            success: true,
            data: updatedArtisan,
        });
    } catch(error) {
        console.error("Erreur lors de la modification de l'artisan", error);
        res.status(500).json({
            success: false,
             message: `Erreur serveur ${error.messsage}`,
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
             message: `Erreur serveur ${error.messsage}`,
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

