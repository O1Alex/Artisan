const express = recquire('express');
const specialiteRoute = express.Router()
const  { getAllSpecialites, 
         createSpecialite, 
         getSpecialiteById, 
         updateSpecialiteById, 
         deleteSpecialiteById 
       } = require("../controllers/specialiteController");



specialiteRoute.post("/", createSpecialite)
specialiteRoute.get("/", getAllSpecialites);
specialiteRoute.get("/:ID", getSpecialiteById);
specialiteRoute.put("/:ID", updateSpecialiteById);
specialiteRoute.delete("/:ID", deleteSpecialiteById);

module.exports = specialiteRoute;