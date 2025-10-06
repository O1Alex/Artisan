const { createContact, 
    getContactById, 
    deleteContactById,
    getAllContacts,
    updateContactById,
    } = require("../controllers/contactController");

const Contact = require ("../models");

class contactService {

//Créer une contact//
    static async createContact(contactData){
        try {
            const newContact = Contact.create(contactData);
            return newContact;
        } catch (err) {
            throw new Error (`Erreur lors de la creation du contact${err.message}`);
        }
    };

//Récupérer tous les contacts//
    static async getAllContacts() {
        try {
            const contacts = Contact.findAll();
            return contacts; 
        } catch (err) {
            throw new Error (`Erreur lors de la recuperations des contacts${err.message}`);
        }
    };
//Récupérer un contact par son id//
    static async getContactById(id){
        try {
            const contact = Contact.findbyPK(id);
            return contact;
        } catch (err) {
            throw new Error (`Erreur lors de la récuperation du contact${err.message}`);
        }
    };
//Modifier un contact//
    static async updateContactById(id, contactData){
        try {
            const contact = Contact.findbyPK(id);
            if (!Contact){
                throw new Error(`Contact ${id} non trouvé`);
            }
            await contact.update(contactData);
            return {contact, ...contactData};
        } catch (err) {
            throw new Error (`Erreur lors de la modification du contact${err.message}`);
        }
    };
//Supprimer un contact//
    static async deleteContactById(id) {
        try {
            const contact = Contact.findbyPK(id);
            if (!Contact){
                throw new Error(`Contact ${id} non trouvé`);
            }
        await Artisan.destroy({
                where:{ id:id,},
            });
        } catch (err) {
            throw new Error (`Erreur lors de la suppresion du contact${err.message}`);
        }
    };
};

module.exports = contactService;