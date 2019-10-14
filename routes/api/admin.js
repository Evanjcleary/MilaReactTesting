const router = require("express").Router();
const adminController = require("../../controllers/adminController");

router.route("/category")
    .get(adminController.findAll)
    .post(adminController.create)

router.route("/captions")
    .post(adminController.createCap)

module.exports = router;



