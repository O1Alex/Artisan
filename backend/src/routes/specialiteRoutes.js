const express = recquire('express');

const  { getAllSpecialites, 
         createSpecialite, 
         getSpecialiteById, 
         updateSpecialiteById, 
         deleteSpecialiteById 
       } = require("../controllers/specialiteController");

const specialiteRoutes = express.Router()

specialiteRoutes.post("/", createSpecialite)
specialiteRoutes.get("/", getAllSpecialites);
specialiteRoutes.get("/:id", getSpecialiteById);
specialiteRoutes.put("/:id", updateSpecialiteById);
specialiteRoutess.delete("/:id", deleteSpecialiteById);

module.exports = specialiteRoutes;