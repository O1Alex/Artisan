const contactService = require('../services/contactService');

const createContact = async(req , res)=> {
    try {
        const contactData = req.body;

        const newContact = await contactService.createContact(contactData);
         res.json({
        success: true,
        data: newContact,
    });
    } catch (error) {
        console.error("Erreur lors de la création du contact", error);
        res.status(500).json({
            success: false,
             message: `Erreur serveur ${error.messsage}`,
        });  
    }
};

const getAllContacts = async(req , res)=> {
     try {
        const contacts = await contactService.getAllContacts();

        res.json({
            success: true,
            data: contacts,
    });
    } catch (error) {
        console.error("Erreur lors de la récupération des contacts", error);
        res.status(500).json({
            success: false,
             message: `Erreur serveur ${error.messsage}`,
        });
    }
};

const getContactById = async(req , res)=> {
     try {
        const { id } = req.params;
        const contact = await contactService.getContactById(id);
        res.json({
            success: true,
            data: contact,
    });
   } catch (error) {
        console.error("Erreur lors de la récupération du contact", error);
        res.status(500).json({
            success: false,
            message: `Erreur serveur ${error.messsage}`,
        });        
    }
};

const updateContactById = async(req , res)=> {
    try {
        const contactData = req.body;
        const { id } = req.params;

        const updatedContact = await contactService.updateContactById(id, contactData);

        res.json({
            success: true,
            data: updatedContact,
        });
    } catch (error) {
        console.error("Erreur lors de la modification du contact", error);
        res.status(500).json({
            success: false,
             message: `Erreur serveur ${error.messsage}`,
        }); 
    }
};

const deleteContactById = async(req , res)=> {
    try {
        const { id } = req.params;

        const contact = await contactService.deleteContactById(id);

        res.json({
            success: true,
            data: {},
        });
    } catch (error) {
        console.error("Erreur lors de la suppression du contact", error);
        res.status(500).json({
            success: false,
             message: `Erreur serveur ${error.messsage}`,
        });   
    }
};

module.exports = {
    createContact, 
    getAllContacts, 
    getContactById, 
    updateContactById, 
    deleteContactById,
};
