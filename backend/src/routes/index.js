const express = require ('express');
const artisanRoutes = require ('./artisanRoutes');
const contactRoutes = require('./contactRoutes');
const specialiteRoutes = require('./specialiteRoutes');
const categorieRoutes = require('./categorieRoutesjs');

const router = express.Router();

router.use("/artisan", artisanRoutes);
router.use("/categorie", categorieRoutes);
router.use("/contact", contactRoutes);
router.use("/specialite", specialiteRoutes);

module.exports = router;