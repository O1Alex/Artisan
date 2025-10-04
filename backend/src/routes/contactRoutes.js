const express = require('express');

const   { createContact, 
        getAllContacts, 
        getContactById, 
        updateContactById, 
        deleteContactById 
        } = require("../controllers/contactController");

const contactRoutes = express.Router()

contactRoutes.post("/", createContact)
contactRoutes.get("/", getAllContacts);
contactRoutes.get("/:id", getContactById);
contactRoutes.put("/:id", updateContactById);
contactRoutes.delete("/:id", deleteContactById);

module.exports = contactRoutes;