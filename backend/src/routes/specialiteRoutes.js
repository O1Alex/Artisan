const { specialiteValidator } = require ('../middlewares/validators');

const express = require('express');

const  { getAllSpecialites, 
         createSpecialite, 
         getSpecialiteById, 
         updateSpecialiteById, 
         deleteSpecialiteById 
       } = require("../controllers/specialiteController");

const specialiteRoutes = express.Router()

specialiteRoutes.post("/",specialiteValidator.create, createSpecialite)
specialiteRoutes.get("/", getAllSpecialites);
specialiteRoutes.get("/:id",specialiteValidator.getById, getSpecialiteById);
specialiteRoutes.put("/:id",specialiteValidator.update, updateSpecialiteById);
specialiteRoutes.delete("/:id",specialiteValidator.delete, deleteSpecialiteById);

module.exports = specialiteRoutes;