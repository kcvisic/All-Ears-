const path = require("path");
const router = require("express").Router();

module.exports = function(app, passport){
  require("./api/auth")(app,passport);
  const apiChatroom = require("./api/api-groveroom");
  router.use("/groveroom" , apiChatroom);
  const apiYoutubeRoutes = require("./api/api-youtube");
  router.use("/youtube", apiYoutubeRoutes);
  app.use("/api", router);
}
//
// router.use((req, res) =>
//   res.sendFile(path.join(__dirname, "../client/build/index.html"))
// );
