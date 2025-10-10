const contactValidator = require ("../middlewares/validators");

const express = require('express');

const   { createContact, 
        getAllContacts, 
        getContactById, 
        updateContactById, 
        deleteContactById 
        } = require("../controllers/contactController");

const contactRoutes = express.Router()

contactRoutes.post("/",contactValidator.create, createContact)
contactRoutes.get("/", getAllContacts);
contactRoutes.get("/:id",contactValidator.getById, getContactById);
contactRoutes.put("/:id",contactValidator.update, updateContactById);
contactRoutes.delete("/:id",contactValidator.delete, deleteContactById);

module.exports = contactRoutes;