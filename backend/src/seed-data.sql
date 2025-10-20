-- /*INSERT INTO AFIN D'ALIMENTER LA BDD*/

 INSERT INTO categorie (nom) VALUES
('Alimentation'),
('Bâtiment'),
('Fabrication'),
('Services');

 INSERT INTO specialite (nom, categorie_id) VALUES
('Boucher', 1),
('Boulanger', 1),
('Chocolatier', 1),
('Traiteur', 1),
('Chauffagiste', 2),
('Electricien', 2),
('Menuisier', 2),
('Plombier', 2),
('Bijoutier', 3),
('Couturier', 3),
('Ferronier', 3),
('Coiffeur', 4),
('Fleuriste', 4),
('Toiletteur', 4),
('Webdesign', 4);

INSERT INTO artisan (nom, specialite_id, note, ville, description, email, site_web, top) VALUES
('Boucherie Dumont', 1, 4.5, 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec.', 'boucherie.dumond@gmail.com', NULL, FALSE),
('Au pain chaud', 2, 4.8, 'Montélimar', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec.', 'aupainchaud@hotmail.com', NULL, TRUE),
('Chocolaterie Labbé', 3, 4.9, 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec.', 'chocolaterie-labbe@gmail.com', 'https://chocolaterie-labbe.fr', TRUE),
('Traiteur Truchon', 4, 4.1, 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec.', 'contact@truchon-traiteur.fr', 'https://truchon-traiteur.fr', FALSE),
('Orville Salmons', 5, 5.0, 'Evian', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec.', 'o-salmons@live.com', NULL, TRUE),
('Mont Blanc Électricité', 6, 4.5, 'Chamonix', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec.', 'contact@mont-blanc-electricite.com', 'https://mont-blanc-electricite.com', FALSE),
('Boutot & fils', 7, 4.7, 'Bourg-en-bresse', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec.', 'boutot-menuiserie@gmail.com', 'https://boutot-menuiserie.com', FALSE),
('Vallis Bellemare', 8, 4.0, 'Vienne', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec.', 'v.bellemare@gmail.com', 'https://plomberie-bellemare.com', FALSE),
('Claude Quinn', 9, 4.2, 'Aix-les-bains', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec.', 'claude.quinn@gmail.com', NULL, FALSE),
('Amitee Lécuyer', 10, 4.5, 'Annecy', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec.', 'a.amitee@hotmail.com', 'https://lecuyer-couture.com', FALSE),
('Ernest Carignan', 11, 5.0, 'Le Puy-en-Velay', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec.', 'e-carigan@hotmail.com', NULL, FALSE),
('Royden Charbonneau', 12, 3.8, 'Saint-Priest', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec.', 'r.charbonneau@gmail.com', NULL, FALSE),
('Leala Dennis', 12, 3.8, 'Chambéry', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec.', 'l.dennos@hotmail.fr', 'https://coiffure-leala-chambery.fr', FALSE),
('C''est sup''hair', 12, 4.1, 'Romans-sur-Isère', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec.', 'sup-hair@gmail.com', 'https://sup-hair.fr', FALSE),
('Le monde des fleurs', 13, 4.6, 'Annonay', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec.', 'contact@le-monde-des-fleurs-annonay.fr', 'https://le-monde-des-fleurs-annonay.fr', FALSE),
('Valérie Laderoute', 14, 4.5, 'Valence', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec.', 'v-laredoute@gmail.com', NULL, FALSE),
('CM Graphisme', 15, 4.4, 'Valence', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec.', 'contact@cm-graphisme.com', 'https://cm-graphisme.com', FALSE);

INSERT INTO contact (artisan_id, client_nom, client_email, question) VALUES

