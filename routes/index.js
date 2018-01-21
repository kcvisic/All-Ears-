const path = require("path");
const router = require("express").Router();
const apiChatroom = require("./api/api-groveroom");
const apiYoutubeRoutes = require("./api/api-youtube");


module.exports = function(app, passport){
  require("./api/auth")(app, passport);
  router.use("/groveroom", apiChatroom);
  router.use("/youtube", apiYoutubeRoutes);
  app.use("/api", router);
}
//
// router.use((req, res) =>
//   res.sendFile(path.join(__dirname, "../client/build/index.html"))
// );
