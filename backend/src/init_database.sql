
CREATE DATABASE IF NOT EXISTS Trouve_Artisan
USE Trouve_Artisan

/*Table des catégories*/
CREATE TABLE categorie IF NOT EXISTS (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100) NOT NULL,
    description VARCHAR(200),
);

/*Table des artisans*/
CREATE TABLE artisan IF NOT EXISTS (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100) NOT NULL,
    note DECIMAL(2,1),
    ville VARCHAR(100) NOT NULL,
    description VARCHAR(200),
    email VARCHAR(100) UNIQUE NOT NULL,
    site_web VARCHAR(150),
    FOREIGN KEY (specialite_id) REFERENCES specialite(id),
);

/*Table des specialites*/
CREATE TABLE specialite IF NOT EXISTS (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100) NOT NULL,
    description VARCHAR(200),
    FOREIGN KEY (categorie_id) REFERENCES categories(id),
);

/*Table contact*/
CREATE TABLE contact IF NOT EXISTS (
    id INT PRIMARY KEY AUTO_INCREMENT,
    FOREIGN KEY (artisan_id) REFERENCES artisan(id),
    client_nom VARCHAR(100) NOT NULL,
    client_email VARCHAR(100) NOT NULL UNIQUE,
    question VARCHAR(200) NOT NULL,
);