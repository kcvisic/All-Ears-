const axios = require("axios");
const db = require("../models");
const bodyParser = require("body-parser");
const router = require("express").Router();

// DESCRIPTION:
//  TELLS YOU IF A USER IS AN ADMIN OF A ROOM
//
//RETURNS:
//  THIS FUNCTION SHOULD RETURN A PROMISE, WHICH WILL HAVE A BOOLEAN INDICATING
//  WHETHER THE USER_ID IS THE CREATOR FOR THE ROOM_ID

var __isAdmin = function(userId, roomId) {
  let isAdmin = false;

  return db.GroveRoom.findOne({
    where: {
      id: roomId
    }
  }).then(function(roomInfo) {
    if (roomInfo.creator_id === userId) {
      isAdmin = true;
    }
    return isAdmin
  })
}

module.exports = {
  isAdmin: function(req, res) {
    __isAdmin(req.session.passport.user, req.query.room_id).then(function(isAdmin) {

      res.send({isAdmin: isAdmin})
    })
  },

  deleteRoom: function(req, res) {
    console.log(req.query)
    __isAdmin(req.session.passport.user, req.query.roomId).then(function(isAdmin) {
      if (isAdmin) {
        db.GroveRoom.destroy({
          where: {
            id: req.query.roomId
          }
        }).then(function() {
          res.sendStatus(200)
        }).catch(function(err) {
          console.log(err);
          res.sendStatus(500).json(err)
        })
      }
      else{
        res.sendStatus(401)
      }
    })
  },
  updateGroveRoom: function(req, res){
    __isAdmin(req.session.passport.user, req.body.room_id).then(function(isAdmin){
      if(isAdmin){
        db.GroveRoom.update({
          song:req.body.song,
          artist:req.body.artist,
          video_id:req.body.video_id,
          image:req.body.image
        }, {
          where: {
            id: req.body.room_id
          }
        }).then(function(newRoomInfo){
          res.json(newRoomInfo)
        })
      }
      else{
          res.sendStatus(401)
      }
    })
  },

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
    db.GroveRoom.findAll().then(function(dbGroveroom) {
      res.send(dbGroveroom)
      console.log(dbGroveroom)
    }).catch(function(err) {
      res.status(401).json(err)
    })
  },

  create: function(req, res) {
    console.log(req.session.passport.user);
    db.GroveRoom.create({
      name: req.body.grooveRoomInput,
      song: req.body.song,
      video_id: req.body.video_id,
      artist: req.body.artist,
      image: req.body.image,
      creator_id: req.session.passport.user
    }).then(function(groveRoom) {
      res.send(groveRoom);
    }).catch(function(err) {
      res.status(401).json(err)
    })
  },

  createMsg: function(req, res) {
    db.Messages.create({message: req.body.message, GroveRoomId: req.body.room_Id, UserId: req.session.passport.user}).then(function(groveRoomMessage) {
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
      order: [
        ["id", "ASC"]
      ],
      include: [db.User]

    }).then(function(groveroomMessages) {
      res.send(groveroomMessages)
    }).catch(function(err) {
      res.status(401).json(err)
    })
  }

}
