
const axios = require("axios");
const db = require("../models");
const bodyParser = require("body-parser");
const router = require("express").Router();

module.exports = {
  findById: function(req, res) {
    console.log("Called findById")
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
  
  findAll: function(req, res) {
    db.GroveRoom.findAll({
      id: req.query.id
    })
    .then(function(dbGroveroom){
      console.log(dbGroveroom)
      res.send(dbGroveroom)
    })
    .catch(function(err){
      res.status(401).json(err)
    })
    },

  create: function(req, res) {
    console.log(req.session.passport.user);
    db.GroveRoom.create({name: req.body.grooveRoomInput,
      song:req.body.song, video_id: req.body.video_id,
      artist:req.body.artist,
      creator_id:req.session.passport.user})
      .then(function(groveRoom) {
      res.send(groveRoom);
    }).catch(function(err) {
      res.status(401).json(err)
    })
  },

  createMsg: function(req, res) {
    db.Messages.create({message: req.body.message,
      GroveRoomId: req.body.room_Id,
      UserId: req.session.passport.user})
      .then(function(groveRoomMessage) {
      res.send(groveRoomMessage)
    }).catch(function(err) {
      res.status(401).json(err)
    })
  },
  getMsgForGroveRoom: function(req, res) {
    console.log("Yo");
    console.log("Looking for messages for room: " + req.query.groveroomId)
    db.Messages.findAll({
      where: {
        GroveRoomId: req.query.groveroomId
      },
    
    }).then(function(groveroomMessages) {
      res.send(groveroomMessages)
    }).catch(function(err) {
      res.status(401).json(err)
    })
  }

}
