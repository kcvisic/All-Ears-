const axios = require("axios");
const router = require("express").Router();
const db = require("../../models");


module.exports = function(app) {

  router.get("/chatroom", function(req, res) {
    db.Chatroom.findAll({
      include: [db.User, db.Messages]
    }).then(function(Chatroom) {
      console.log(res.json(Chatroom));
    })
  })
}
