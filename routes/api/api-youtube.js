
const axios = require("axios");
const router = require("express").Router();
const bodyParser = require("body-parser");
const YouTube = require('simple-youtube-api');
var youtube = null;

if (process.env.YOUTUBE_API_KEY) {
  youtube = new YouTube(process.env.YOUTUBE_API_KEY);
} else {
  const credentials = require("../../client_secret")
  youtube = new YouTube(credentials.youtube_api_key);
}

router.route("/search/:keyword")
  .get(function (req, res) {
    const keyword = req.params.keyword;
    const option = {
      type: 'video',

    }
    youtube.searchVideos(keyword, 1)
      .then(function (results) {
        res.send(results[0]);
      })
  });

module.exports = router;