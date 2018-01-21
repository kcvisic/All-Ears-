const axios = require("axios");
const db = require("../models");
const router = require("express").Router();

module.exports = {
    findById: function (req, res) {
        const id = req.params.id
        console.log(req.params.id)
        db.GroveRoom.findOne({
                where: {
                    id: id
                }
            }).then(function (dbGroveroom) {
                res.json(dbGroveroom)

            })
            .catch(function (err) {
                res.status(401).json(err)
                console.log(dbGroveroom)
            })
    }
}