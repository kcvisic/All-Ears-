const axios = require("axios");
const router = require("express").Router();
const authController = require("../../controllers/authcontroller");

module.exports = function(app, passport) {
  router.route("/authenticated").get(authController.isAuthenticated);

  router.route("/signup").post(authController.signUp);

  router.route('/logout').get(authController.logout);

  router.route("/signin").post(passport.authenticate('local', {failWithError: true}),
  function successCallback(req, res, next) {
    return res.sendStatus(200);
  }, function errorCallback(err, req, res, next) {
    return res.sendStatus(401);
  })

  app.use('/auth', router);
}
