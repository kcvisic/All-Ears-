const axios = require("axios");
const router = require("express").Router();
const authController = require("../../controllers/authcontroller");

module.exports = function (app, passport) {
  router.route("/authenticated")
    .get(authController.isAuthenticated);

  router.route("/signup")
    .post(authController.signUp);

  router.route('/logout')
    .get(authController.logout);

  router.route("/signin")
    .post(passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/',
    }))

  app.use('/auth', router);
}