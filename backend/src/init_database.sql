
CREATE DATABASE IF NOT EXISTS Trouve_Artisan
USE Trouve_Artisan

/*Table des catégories*/
CREATE TABLE categorie IF NOT EXISTS (
    id INT PRIMARY KEY AUTO_INCREMENT,
    artisan_id INT FOREIGN KEY AUTO_INCREMENT,
    nom VARCHAR(100) NOT NULL,
);

/*Table des artisans*/
CREATE TABLE artisan IF NOT EXISTS (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100) NOT NULL,
    specialite_id INT FOREIGN KEY AUTO_INCREMENT,
    note DECIMAL(2,1),
    ville VARCHAR(100) NOT NULL,
    description VARCHAR(200),
    email VARCHAR(100) UNIQUE NOT NULL,
    site_web VARCHAR(150),
    top_3 BOOLEAN DEFAULT FALSE
);

/*Table des specialites*/
CREATE TABLE specialite IF NOT EXISTS (
    id INT PRIMARY KEY AUTO_INCREMENT,
    categorie_id INT FOREIGN KEY AUTO_INCREMENT,
    nom VARCHAR(100) NOT NULL,
);

/*Table contact*/
CREATE TABLE contact IF NOT EXISTS (
    id INT PRIMARY KEY AUTO_INCREMENT,
    artisan_id INT FOREIGN KEY AUTO_INCREMENT,
    client_Nom VARCHAR(100) NOT NULL,
    client_Email VARCHAR(100) NOT NULL UNIQUE,
    question VARCHAR(200) NOT NULL,
);