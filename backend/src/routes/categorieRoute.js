const express = recquire('express');
const categorieRoute = express.Router()
const { createCategorie, 
        getAllCategories,  
        getCategorieById, 
        updateCategorieById, 
        deleteCategorieById, 
        } = require("../controllers/categorieController");


categorieRoute.post("/", createCategorie)
categorieRoute.get("/", getAllCategories);
categorieRoute.get("/:id", getCategorieById);
categorieRoute.put("/:id", updateCategorieById);
categorieRoute.delete("/:id", deleteCategorieById);

module.exports = categorieRoute;