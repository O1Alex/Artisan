const { createContact, 
    getContactById, 
    deleteContactById,
    getAllContacts,
    updateContactById,
    } = require("../controllers/contactController");

const { Contact, Artisan } = require ("../models");

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
    static async getAllContacts(filter={}) {
        try {
            const options = { 
                include : { model : Artisan } };
                if (Object.keys(filter).lenght > 0){
                options.where = filter;
            };
            const contacts = await Contact.findAll(options);
            return contacts; 

        } catch (err) {
            throw new Error (`Erreur lors de la recuperations des contacts${err.message}`);
        }
    };
//Récupérer un contact par son id//
    static async getContactById(id){
        try {
            const contact = await Contact.findByPk(id, { include : { model : Artisan } });
            return contact;

        } catch (err) {
            throw new Error (`Erreur lors de la récuperation du contact${err.message}`);
        }
    };
//Modifier un contact//
    static async updateContactById(id, contactData){
        try {
            const contact = await Contact.findByPk(id);
            if (!Contact){
                throw new Error(`Contact ${id} non trouvé`);
            }
            await contact.update(contactData);
            return {...contact.get(), ...contactData};

        } catch (err) {
            throw new Error (`Erreur lors de la modification du contact${err.message}`);
        }
    };
//Supprimer un contact//
    static async deleteContactById(id) {
        try {
            const contact = await Contact.findByPk(id);
            if (!Contact){
                throw new Error(`Contact ${id} non trouvé`);
            }
            await contact.destroy();
            return contact;

        } catch (err) {
            throw new Error (`Erreur lors de la suppresion du contact${err.message}`);
        }
    };
};

module.exports = contactService;