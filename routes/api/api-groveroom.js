const axios = require("axios");
const router = require("express").Router();

const grooveController = require("../../controllers/grooveroom")

router.route("/:id")
    .get(grooveController.findById);

router.route("/create")
    .post(grooveController.create)

module.exports = router;