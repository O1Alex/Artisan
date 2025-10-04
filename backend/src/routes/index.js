const express = require ('express');
const artisanRoutes = require ('./artisanRoutes');
const categorieRoutes = require ('./categorieRoutes');
const contactRoutes = require('./contactRoutes');
const specialiteRoutes = require('./specialiteRoutes');

const router = express.Router();

router.use("/artisans", artisanRoutes);
router.use("/categories", categorieRoutes);
router.use("/contact", contactRoutes);
router.use("/specialites", specialiteRoutes);

module.exports = router;