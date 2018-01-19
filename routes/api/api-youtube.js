const axios = require("axios");
const credentials = require("../../client_secret")
const router = require("express").Router();
const bodyParser = require("body-parser");
const YouTube = require('simple-youtube-api');
const youtube = new YouTube(credentials.youtube_api_key);

router.route("/search/:keyword")
  .get(function(req, res) {
    const keyword = req.params.keyword;
    const option = {
      type: 'video',

    }
    youtube.searchVideos(keyword, 1 )
      .then(function(results) {
        res.send(results[0]);
      })
  });

// module.exports = router;
