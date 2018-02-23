const router = require("express").Router();
const grooveController = require("../../controllers/grooveroom")


router.route("/messages")
    .get(grooveController.getMsgForGroveRoom);

router.route("/room/:id")
    .get(grooveController.findById);

router.route("/create")
    .post(grooveController.create);

router.route("/message")
    .post(grooveController.createMsg)

router.route("/room")
  .get(grooveController.findAll);

router.route("/users/:id")

module.exports = router;
