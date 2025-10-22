const { body, param, query, validationResult } = require('express-validator');


const validate = (req, res, next) => {
    const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(404).json({
                success: false,
                errors: errors.array().map((err) => ({
                    field: err.param,
                    message: err.msg,
                })),
            });
        }
        next();
    };

//Concernant les routes de Artisan
const artisanValidator ={
    get: [
        query("top")
            .notEmpty()
            .isBoolean()
            .withMessage("Le paramètre 'top' doit etre un booléen")
            .toBoolean(),
        query("limit")
            .optional()
            .isInt({ min: 1})
            .withMessage("Le parametre 'limit' doit être un entier positif")
            .toInt(),
        query("categorie_id")
            .optional()
            .isInt()
            .withMessage("Le parametre 'categorie_id' doit être un entier")
            .toInt(),
        validate,
    ],
    create: [
         body("nom")
            .notEmpty()
            .withMessage("Le nom de l'artisan est recquis.")
            .isLength({ min: 1, max: 60})
            .withMessage("Le nom doit comporter entre 1 et 60 caracteres")
            .escape(),
         body("ville")
            .notEmpty()
            .withMessage("La ville est recquise.")
            .isLength({ min: 1, max: 60})
            .withMessage("Le nom doit comporter entre 1 et 60 caracteres")
            .escape(),
        body("email")
            .notEmpty()
            .isEmail()
            .withMessage("Email recquis.")
            .escape(),
        body("site_web")
            .optional()
            .isURL()
            .withMessage("Site Web recquis")
            .escape(),
        validate,
    ],
    getById:[
        param("id").isInt().withMessage("Id de l'artisan invalide"),
        validate,
    ],
    update:[
        param("id").isInt().withMessage("Id de l'artisan invalide"),
        body("nom")
            .notEmpty()
            .withMessage("Le nom de l'artisan est recquis.")
            .isLength({ min: 1, max: 60})
            .withMessage("Le nom doit comporter entre 1 et 60 caracteres")
            .escape(),
        body("ville")
            .notEmpty()
            .withMessage("La ville est recquise.")
            .isLength({ min: 1, max: 60})
            .withMessage("Le nom doit comporter entre 1 et 60 caracteres")
            .escape(),
        body("email")
            .notEmpty()
            .isEmail()
            .withMessage("Email recquis.")
            .escape(),
        body("site_web")
            .isURL()
            .withMessage("Site Web recquis")
            .escape(),
        validate,
    ],
    delete:[
        param("id").isInt().withMessage("Id de l'artisan invalide"),
        validate,
    ],
};

//Concernant les routes de Categorie
const categorieValidator ={
    create: [
        body("nom")
            .notEmpty()
            .withMessage("Le nom de la catégorie est recquise.")
            .isLength({ min: 1, max: 60})
            .withMessage("Le nom doit comporter entre 1 et 60 caracteres")
            .escape(),
        validate,
    ],

    getById: [
        param("id").isInt().withMessage("Id de la categorie invalide"),
        validate,
    ],
    update:[
        param("id").isInt().withMessage("Id de la categorie invalide"),
        body("nom")
            .notEmpty()
            .withMessage("Le nom de la catégorie est recquise.")
            .isLength()
            .withMessage("Le nom doit comporter entre 1 et 60 caracteres")
            .escape(),
        validate,
        

    ],
    delete:[
        param("id").isInt().withMessage("Id de la categorie invalide"),
        validate,
    ],
};
 

//Concernant les routes de Contact
const contactValidator ={
    create: [
        body("client_nom")
            .notEmpty()
            .withMessage("Nom recquis.")
            .isLength({ min: 1, max: 60})
            .withMessage("Le nom doit comporter entre 1 et 60 caracteres")
            .escape(),
        body("client_email")
            .notEmpty()
            .isEmail()
            .withMessage("Email recquis.")
            .escape(),
        body("question")
            .notEmpty()
            .withMessage("Une question est recquise.")
            .isLength({ min: 1, max: 100})
            .withMessage("La question doit comporter entre 1 et 100 caracteres")
            .escape(),
        validate,       
    ],
    getById: [
        param("id").isInt().withMessage("Id du contact invalide"),
        validate,
    ],
    update:[
        param("id").isInt().withMessage("Id du contact invalide"),
        body("client_nom")
            .notEmpty()
            .withMessage("Le nom est recquis.")
            .isLength({ min: 1, max: 60})
            .withMessage("Le nom doit comporter entre 1 et 60 caracteres")
            .escape(),
        body("client_email")
            .notEmpty()
            .isEmail()
            .withMessage("Email recquis.")
            .escape(),
        body("question")
            .notEmpty()
            .withMessage("Question recquise.")
            .isLength({ min: 1, max: 100})
            .withMessage("La question doit comporter entre 1 et 100 caracteres")
            .escape(),
        validate,
    ],
    delete:[
        param("id").isInt().withMessage("Id du contact invalide"),
        validate,
    ],
};


//Concernant les routes de Specialite
const specialiteValidator ={
    create: [
        body("nom")
            .notEmpty()
            .withMessage("Le nom de la catégorie est recquise.")
            .isLength({ min: 1, max: 60})
            .withMessage("Le nom doit comporter entre 1 et 60 caracteres")
            .escape(),
        validate,
    ],
    getById: [
        param("id").isInt().withMessage("Id de la specialite invalide"),
        validate,
    ],
    update:[
        param("id").isInt().withMessage("Id de la specialite invalide"),
        body("nom")
            .notEmpty()
            .withMessage("Le nom de la catégorie est recquise.")
            .isLength({ min: 1, max: 60})
            .withMessage("Le nom doit comporter entre 1 et 60 caracteres")
            .escape(),
        validate,
    ],
    delete:[
        param("id").isInt().withMessage("Id de la specialite invalide"),
        validate,
    ],
};


module.exports = {
    artisanValidator,
    categorieValidator,
    contactValidator,
    specialiteValidator,
};