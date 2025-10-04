const express = require('express');

const { createArtisan, 
        getAllArtisans, 
        getArtisanById, 
        updateArtisanById, 
        deleteArtisanById, 
        } = require ("../controllers/artisanController");

const artisanRoutes = express.Router();

artisanRoutes.post("/", createArtisan);
artisanRoutes.get("/", getAllArtisans);
artisanRoutes.get("/:id", getArtisanById);
artisanRoutes.put("/:id", updateArtisanById);
artisanRoutes.delete("/:id", deleteArtisanById);

module.exports = artisanRoutes;