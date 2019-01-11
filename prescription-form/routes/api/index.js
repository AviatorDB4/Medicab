const router = require("express").Router();
const prescRoutes = require("./prescriptions");

// Book routes
router.use("/prescriptions", prescRoutes);

module.exports = router;