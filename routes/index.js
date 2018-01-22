const path = require("path");
const router = require("express").Router();
const authController = require("../controllers/authcontroller");
module.exports = function(app, passport){

  //all auth routes are under '/auth/....'
  require("./api/auth")(app,passport);

  // enforce a user to be logged into the session in order to
  // actually hit any of our designated '/api/...' routes
  // we are using a middleware that takes in(req,res,and next), params
  // we can use this in the router.use case, because it will check and
  //validate the request, if request is oky, we can use next() method to
  // allow router to proceed. Else if it fails then we need to send a response back,
  //and disable the router to proceede.
  router.use(function(req,res,next){
    console.log(req.session)
    const userAuthenticated = authController.__isAuthenticated(req);
    if(userAuthenticated){
      next();
    }else{
      res.sendStatus(401);
    }
  })
  const groveroom = require("./api/api-groveroom");
  router.use("/grooveroom" , groveroom);
  const apiYoutubeRoutes = require("./api/api-youtube");
  router.use("/youtube", apiYoutubeRoutes);
  app.use("/api", router);
}
//
// router.use((req, res) =>
//   res.sendFile(path.join(__dirname, "../client/build/index.html"))
// );
