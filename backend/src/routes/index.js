const express = require ('express');
const artisanRoutes = require ('./artisanRoutes');
const contactRoutes = require('./contactRoutes');
const specialiteRoutes = require('./specialiteRoutes');
const categorieRoutes = require('./categorieRoutesjs');

const router = express.Router();

router.use("/artisans", artisanRoutes);
router.use("/categories", categorieRoutes);
router.use("/contact", contactRoutes);
router.use("/specialites", specialiteRoutes);

module.exports = router;