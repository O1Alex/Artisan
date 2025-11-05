
CREATE DATABASE IF NOT EXISTS Trouve_Artisans;
USE Trouve_Artisans;

-- /*Table des catégories*/
CREATE TABLE categorie IF NOT EXISTS (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100) NOT NULL,
);

-- /*Table des specialites*/
CREATE TABLE specialite IF NOT EXISTS (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100) NOT NULL,
    categorie_id INT,
    FOREIGN KEY (categorie_id) REFERENCES categories(id),
);

-- /*Table des artisans*/
CREATE TABLE artisan IF NOT EXISTS (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100) NOT NULL,
    note DECIMAL(2,1),
    ville VARCHAR(100) NOT NULL,
    description VARCHAR(200),
    email VARCHAR(100) UNIQUE NOT NULL,
    site_web VARCHAR(150),
    top BOOLEAN DEFAULT FALSE NOT NULL,
    specialite_id INT,
    FOREIGN KEY (specialite_id) REFERENCES specialite(id),
);

-- /*Table contact*/
CREATE TABLE contact IF NOT EXISTS (
    id INT PRIMARY KEY AUTO_INCREMENT,
    artisan_id INT,
    FOREIGN KEY (artisan_id) REFERENCES artisan(id),
    client_nom VARCHAR(100) NOT NULL,
    client_email VARCHAR(100) NOT NULL UNIQUE,
    message VARCHAR(400) NOT NULL,
    objet VARCHAR(100) NOT NULL,
);