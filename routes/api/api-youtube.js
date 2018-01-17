const axios = require("axios");
const credentials = require("../../client_secret")
const router = require("express").Router();
const YouTube = require('simple-youtube-api');
const youtube = new YouTube(credentials.youtube_api_key);

router.route("/search/:keyword")
  .get(function(req, res) {
    const keyword = req.params.keyword;
    const option = {
      type: 'video'
    }
    youtube.searchVideos(keyword, 1)
      .then(function(results) {
        const video_id = results[0].id
        youtube.getVideoByID(video_id)
          .then(function(results) {
            res.send(results);
          })
      })
  });

module.exports = router;
