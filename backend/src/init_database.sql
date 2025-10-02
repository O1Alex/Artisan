
CREATE DATABASE IF NOT EXISTS Trouve_Artisan
USE Trouve_Artisan

/*Table des catégories*/
CREATE TABLE categorie IF NOT EXISTS (
    id_categorie INT PRIMARY KEY AUTO_INCREMENT,
    libelle VARCHAR(50) NOT NULL
);

/*Table des artisans*/
CREATE TABLE artisan IF NOT EXISTS (
    id_artisan INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100) NOT NULL,
    specialite VARCHAR(100) NOT NULL,
    note DECIMAL(2,1),
    ville VARCHAR(100),
    a_propos TEXT,
    email VARCHAR(150) UNIQUE,
    site_web VARCHAR(150),
    top BOOLEAN DEFAULT FALSE
);


/*Table d'association appartient*/
CREATE TABLE appartient IF NOT EXISTS (
    id_artisan INT NOT NULL,
    id_categorie INT NOT NULL,
    PRIMARY KEY (id_artisan, id_categorie),
    FOREIGN KEY (id_artisan) REFERENCES artisan(id_artisan)
        ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (id_categorie) REFERENCES categorie(id_categorie)
        ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE contact IF NOT EXISTS (
    id_contact
    
);