const axios = require("axios");
const router = require("express").Router();
const db = require("../../models");
var grooveController = require("../../controllers/grooveroom")


//
router.route("/:id")
    .get(grooveController.findById)



module.exports = router;
