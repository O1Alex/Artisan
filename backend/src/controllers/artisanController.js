const artisanService = require('../services/artisanService');

const createArtisan = async(req , res)=> {
    res.json({
        success: true,
        data: {},
    });
};
const getAllArtisans = async(req , res)=> {
    try{ 
        const artisans = await artisanService.getAllArtisans();

        res.json({
            success: true,
             data: artisans,
      });
    } catch (error) {
        console.error("Erreur lors de la rcuperations des artisans", error);
        res.status(500).json({
            success: false,
             message: "Erreur serveur",
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
        res.status(500).json({
            success: false,
             message: "Erreur serveur",
      });

    }
};

const updateArtisanById = async(req , res)=> {
    res.json({
        success: true,
        data: {},
    });
};
const deleteArtisanById = async(req , res)=> {
    try{ 
        const { id } = req.params;
        const artisan = await artisanService.deleteArtisanById(id);
        await artisanService.deleteArtisanById(id);
        
        res.json({
            success: true,
             data: artisan,
        });
    } catch (error) {
        console.error("Erreur lors de la suppression de l'artisan", error);
        res.status(500).json({
            success: false,
             message: "Erreur serveur",
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

