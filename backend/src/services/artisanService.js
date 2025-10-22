const { deleteArtisanById, 
    createArtisan, 
    getAllArtisans, 
    updateArtisanById, 
    getArtisanById, 
    } = require("../controllers/artisanController");

const { Artisan, Specialite, Categorie } = require("../models");

class artisanService {
//Créer un artisan//
    static async createArtisan(artisanData){
        try {
            const newArtisan = await Artisan.create(artisanData);
            return newArtisan;
            
        } catch (err) {
            throw new Error(`Erreur lors de la création de l'artisan ${err.message}` );
        }
    };

//Récupérer tous les artisans//  
    static async getAllArtisans(filter= {}, limit, categorie_id){
        try {
            const include =[{ model : Specialite }];
            if (categorie_id){
                [0]
            }        
            const options = { 
                include,
                order: [["note", "DESC"]],
            };
                //Ajout des filtres
                if (Object.keys(filter).length > 0){
                    options.where = filter;
                };

                if(limit){
                    options.limit = parseInt(limit, 10)
                };
                
            const artisans = await Artisan.findAll(options);
            return artisans;
        
        } catch (err) {
            throw new Error(`Erreur lors de la récupération des artisans ${err.message}`);
        }
    };

//Récupérer artisan grace à l'id//
    static async getArtisanById(id){
        try {
            const artisan = await Artisan.findByPk(id, { include : { model : Specialite } });
            return artisan;

        } catch (err) {
            throw new Error(`Erreur lors de la récupération de l'artisa n${err.message}`);
        }
    };

//Modifier un artisan existant"
    static async updateArtisanById(id, artisanData){
        try {
            const artisan = await Artisan.findByPk(id);
            if (!Artisan){
                throw new Error(`Artisan ${id} non trouvé`);
            }
            await artisan.update(artisanData);
            return {...artisan.get(), ...artisanData};

        } catch (err) {
            throw new Error(`Erreur lors de la modification de l'artisan${err.message}`);
        }
    }

//Supprimer un artisan par son id//    
    static async deleteArtisanById(id){
        try {
            const artisan = await Artisan.findByPk(id);
            if (!artisan) {
                throw new Error(`Artisan ${id} non trouvé`);
            }
            await Artisan.destroy({
                where:{id:id},
            });
            return artisan;

        } catch (err) {
        throw new Error(`Erreur lors de la suppression de l'artisan${err.message}`);
        } 
    }
};

module.exports = artisanService;