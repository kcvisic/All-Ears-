const router = require("express").Router();
const grooveController = require("../../controllers/grooveroom")


router.route("/messages")
    .get(grooveController.getMsgForGroveRoom);

router.route("/room/:id")
    .get(grooveController.findById);

router.route("/create")
    .post(grooveController.create);

router.route("/update")
        .put(grooveController.updateGroveRoom);

router.route("/message")
    .post(grooveController.createMsg)

router.route("/room")
  .get(grooveController.findAll)
  .delete(grooveController.deleteRoom);

  router.route("/admin")
    .get(grooveController.isAdmin);

module.exports = router;
