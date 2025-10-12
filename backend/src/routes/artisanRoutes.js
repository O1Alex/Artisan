const { artisanValidator } = require ("../middlewares/validators");

const express = require('express');

const { createArtisan, 
        getAllArtisans, 
        getArtisanById, 
        updateArtisanById, 
        deleteArtisanById, 
        } = require ("../controllers/artisanController");

const artisanRoutes = express.Router();

artisanRoutes.post("/",artisanValidator.create, createArtisan);
artisanRoutes.get("/", getAllArtisans);
artisanRoutes.get("/:id",artisanValidator.getById, getArtisanById);
artisanRoutes.put("/:id",artisanValidator.update, updateArtisanById);
artisanRoutes.delete("/:id",artisanValidator.delete, deleteArtisanById);

module.exports = artisanRoutes;