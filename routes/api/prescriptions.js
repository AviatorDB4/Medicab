const router = require("express").Router();
const prescController = require("../../controllers/prescController");

router.route("/")
  .get(prescController.findAll)
  .post(prescController.create);

// Matches with "/api/prescription/:id"
router
  .route("/:id")
  .get(prescController.findById)
  .put(prescController.update)
  .delete(prescController.remove);

module.exports = router;