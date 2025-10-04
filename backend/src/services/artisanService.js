const { deleteArtisanById } = require("../controllers/artisanController");
const { Artisan } = require("../models");

class artisanService {
    static async getAllArtisan(){
//Récupérer tous les artisans//
        const artisans = Artisan.findAll();
        return artisans;
    }
    static async getArtisanById(id){
//Récupérer artisan grace à l'id//
        const artisan = Artisan.finbyPk(id);
        return artisan;
    }
    static async deleteArtisanById(id){
//Supprimer un artisan par son id//
        await Artisan.destroy({
            where:{
                id:id,
            },
        });
    }
};
module.exports = artisanService;