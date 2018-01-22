const axios = require("axios");
const db = require("../models");
const bodyParser = require("body-parser");
const router = require("express").Router();

module.exports = {
  findById: function(req, res) {
    const id = req.params.id
    console.log(req.params.id)
    db.GroveRoom.findOne({
      where: {
        id: id
      }
    }).then(function(dbGroveroom) {
      res.json(dbGroveroom)

    }).catch(function(err) {
      res.status(401).json(err)
      console.log(dbGroveroom)
    })
  },
  create: function(req, res) {
    console.log(req.session.passport.user);
    db.GroveRoom.create({
      name: req.body.grooveRoomInput,
       song: req.body.song,
       video_id: req.body.video_id,
       artist: req.body.artist,
       creator_id: req.session.passport.user})
       .then(function(groveRoom) {
         res.send(groveRoom);
    }).catch(function(err){
        res.status(401).json(err)
    })

  }
}
