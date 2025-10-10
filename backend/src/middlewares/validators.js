const { body, validationResult } = require('express-validator');


const validate = (req, res, next) => {
    const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(404).json({
                success: false,
                errors: errors,
            });
        }
        next();
    };

//Concernant les routes de Artisan
const artisanValidator ={
    create: [
     
    ],
    getById: [
        param("id").isInt().withMessage("Id la categorie invalide"),
        validate,
    ],
    update:[
       param("id").isInt().withMessage("Id la categorie invalide"),
        validate,
    ],
    delete:[
        param("id").isInt().withMessage("Id la categorie invalide"),
        validate,
    ],
};

//Concernant les routes de Categorie
const categorieValidator ={
    create: [
        body("nom")
            .notEmpty()
            .withMessage("Le nom de la catégorie est recquise.")
            .isLenght({ min: 1, max: 60})
            .withMessage("Le nom doit comporter entre 1 et 60 caracteres")
            .sanitizer(),
        validate,
    ],

    getById: [
        param("id").isInt().withMessage("Id la categorie invalide"),
        validate,
    ],
    update:[
        param("id").isInt().withMessage("Id la categorie invalide"),
        body("nom")
            .notEmpty()
            .withMessage("Le nom de la catégorie est recquise.")
            .isLenght()
            .withMessage("Le nom doit comporter entre 1 et 60 caracteres")
            .sanitizer(),
        validate,
        

    ],
    delete:[
        param("id").isInt().withMessage("Id la categorie invalide"),
        validate,
    ],
};
 

//Concernant les routes de Contact
const contactValidator ={
    create: [
        body("client_nom")
            .notEmpty()
            .withMessage("Votre nom est recquis.")
            .isLenght({ min: 1, max: 60})
            .withMessage("Votre nom doit comporter entre 1 et 60 caracteres")
            .sanitizer(),
        body("client_email")
            .notEmpty()
            .withMessage("Votre email est recquis.")
            .isLenght({ min: 1, max: 100})
            .withMessage("Votre email doit comporter entre 1 et 100 caracteres")
            .sanitizer(),
        body("question")
            .notEmpty()
            .withMessage("Une question est recquise.")
            .isLenght({ min: 1, max: 100})
            .withMessage("Votre question doit comporter entre 1 et 100 caracteres")
            .sanitizer(),
        validate,       
    ],
    getById: [
        param("id").isInt().withMessage("Id la categorie invalide"),
        body("client_nom")
            .notEmpty()
            .withMessage("Votre nom est recquis.")
            .isLenght({ min: 1, max: 60})
            .withMessage("Votre nom doit comporter entre 1 et 60 caracteres")
            .sanitizer(),
        body("client_email")
            .notEmpty()
            .withMessage("Votre email est recquis.")
            .isLenght({ min: 1, max: 100})
            .withMessage("Votre email doit comporter entre 1 et 100 caracteres")
            .sanitizer(),
        body("question")
            .notEmpty()
            .withMessage("Une question est recquise.")
            .isLenght({ min: 1, max: 100})
            .withMessage("Votre question doit comporter entre 1 et 100 caracteres")
            .sanitizer(),
        validate,
    ],
    update:[
        param("id").isInt().withMessage("Id la categorie invalide"),
        validate,
    ],
    delete:[
        param("id").isInt().withMessage("Id la categorie invalide"),
        validate,
    ],
};


//Concernant les routes de Specialite
const specialiteValidator ={
    create: [
        body("nom")
            .notEmpty()
            .withMessage("Le nom de la catégorie est recquise.")
            .isLenght({ min: 1, max: 60})
            .withMessage("Le nom doit comporter entre 1 et 60 caracteres")
            .sanitizer(),
        validate,
    ],
    getById: [
        param("id").isInt().withMessage("Id la categorie invalide"),
        validate,
    ],
    update:[
        param("id").isInt().withMessage("Id la categorie invalide"),
        body("nom")
            .notEmpty()
            .withMessage("Le nom de la catégorie est recquise.")
            .isLenght({ min: 1, max: 60})
            .withMessage("Le nom doit comporter entre 1 et 60 caracteres")
            .sanitizer(),
        validate,
    ],
    delete:[
        param("id").isInt().withMessage("Id la categorie invalide"),
        validate,
    ],
};


module.exports = {
    artisanValidator,
    categorieValidator,
    contactValidator,
    specialiteValidator,
};