const express = require('express');
const artisanRoute = express.Router();
const { createArtisan, 
        getAllArtisans, 
        getArtisanById, 
        updateArtisanById, 
        deleteArtisanById, 
        } = require ("../controllers/artisanController");



artisanRoute.post("/", createArtisan);
artisanRoute.get("/", getAllArtisans);
artisanRoute.get("/:id", getArtisanById);
artisanRoute.put("/:id", updateArtisanById);
artisanRoute.delete("/:id", deleteArtisanById);

module.exports = artisanRoute;