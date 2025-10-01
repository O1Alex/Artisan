/* INSERT TO AFIN D'ALIMENTER LA BDD*/
INSERT INTO categorie (libelle) VALUES
('Alimentation'),
('Bâtiment'),
('Fabrication'),
('Services');

INSERT INTO artisan (specialite, nom, note, ville, a_propos, email, site_web, top) VALUES
('Boucher', 'Boucherie Dumont', 4.5, 'Lyon', 'Lorem ipsum dolor sit amet...', 'boucherie.dumond@gmail.com', NULL, FALSE),
('Boulanger', 'Au pain chaud', 4.8, 'Montélimar', 'Lorem ipsum dolor sit amet...', 'aupainchaud@hotmail.com', NULL, TRUE),
('Chocolatier', 'Chocolaterie Labbé', 4.9, 'Lyon', 'Lorem ipsum dolor sit amet...', 'chocolaterie-labbe@gmail.com', 'https://chocolaterie-labbe.fr', TRUE),
('Traiteur', 'Traiteur Truchon', 4.1, 'Lyon', 'Lorem ipsum dolor sit amet...', 'contact@truchon-traiteur.fr', 'https://truchon-traiteur.fr', FALSE),

('Chauffagiste', 'Orville Salmons', 5.0, 'Evian', 'Lorem ipsum dolor sit amet...', 'o-salmons@live.com', NULL, TRUE),
('Electricien', 'Mont Blanc Electricité', 4.5, 'Chamonix', 'Lorem ipsum dolor sit amet...', 'contact@mont-blanc-electricite.com', 'https://mont-blanc-electricite.com', FALSE),
('Menuisier', 'Boutot & fils', 4.7, 'Bourg-en-bresse', 'Lorem ipsum dolor sit amet...', 'boutot-menuiserie@gmail.com', 'https://boutot-menuiserie.com', FALSE),
('Plombier', 'Vallis Bellemare', 4.0, 'Vienne', 'Lorem ipsum dolor sit amet...', 'v.bellemare@gmail.com', 'https://plomberie-bellemare.com', FALSE),

('Bijoutier', 'Claude Quinn', 4.2, 'Aix-les-bains', 'Lorem ipsum dolor sit amet...', 'claude.quinn@gmail.com', NULL, FALSE),
('Couturier', 'Amitee Lécuyer', 4.5, 'Annecy', 'Lorem ipsum dolor sit amet...', 'a.amitee@hotmail.com', 'https://lecuyer-couture.com', FALSE),
('Ferronier', 'Ernest Carignan', 5.0, 'Le Puy-en-Velay', 'Lorem ipsum dolor sit amet...', 'e-carigan@hotmail.com', NULL, FALSE),

('Coiffeur', 'Royden Charbonneau', 3.8, 'Saint-Priest', 'Lorem ipsum dolor sit amet...', 'r.charbonneau@gmail.com', NULL, FALSE),
('Coiffeur', 'Leala Dennis', 3.8, 'Chambéry', 'Lorem ipsum dolor sit amet...', 'l.dennos@hotmail.fr', 'https://coiffure-leala-chambery.fr', FALSE),
('Coiffeur', 'C\'est sup\'hair', 4.1, 'Romans-sur-Isère', 'Lorem ipsum dolor sit amet...', 'sup-hair@gmail.com', 'https://sup-hair.fr', FALSE),
('Fleuriste', 'Le monde des fleurs', 4.6, 'Annonay', 'Lorem ipsum dolor sit amet...', 'contact@le-monde-des-fleurs-annonay.fr', 'https://le-monde-des-fleurs-annonay.fr', FALSE),
('Toiletteur', 'Valérie Laderoute', 4.5, 'Valence', 'Lorem ipsum dolor sit amet...', 'v-laredoute@gmail.com', NULL, FALSE),
('Webdesign', 'CM Graphisme', 4.4, 'Valence', 'Lorem ipsum dolor sit amet...', 'contact@cm-graphisme.com', 'https://cm-graphisme.com', FALSE);

INSERT INTO appartient (id_artisan, id_categorie) VALUES
-- Alimentation
(1, 1),
(2, 1),
(3, 1),
(4, 1),

-- Bâtiment
(5, 2),
(6, 2),
(7, 2),
(8, 2),

-- Fabrication
(9, 3),
(10, 3),
(11, 3),

-- Services
(12, 4),
(13, 4),
(14, 4),
(15, 4),
(16, 4),
(17, 4);
