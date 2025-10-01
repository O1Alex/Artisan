const express = require ('express');
const artisanRoute = require ('./artisanRoute');
const categorieRoute = require ('./categorieRoute');
const contactRoute = require('./contactRoute');
const specialiteRoute = require('./specialiteRoute');

const router = express.Router();

router.use("/artisans", artisanRoute);
router.use("/categories", categorieRoute);
router.use("/contact", contactRoute);
router.use("/specialites", specialiteRoute);

module.exports = router;