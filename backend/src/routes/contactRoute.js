const express = recquire('express');
const contactRoute = express.Router()
const   { createContact, 
        getAllContacts, 
        getContactById, 
        updateContactById, 
        deleteContactById 
        } = require("../controllers/contactController");


contactRoute.post("/", createContact)
contactRoute.get("/", getAllContacts);
contactRoute.get("/:id", getContactById);
contactRoute.put("/:id", updateContactById);
contactRoute.delete("/:id", deleteContactById);

module.exports = contactRoute;