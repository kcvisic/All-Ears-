const path = require("path");
const router = require("express").Router();

module.exports = function(app, passport){
  require("./api/auth")(app,passport);
  const apiRoutes = require("./api/api-routes");
  router.use("/api" , apiRoutes);
  app.use(router);
}

router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);
