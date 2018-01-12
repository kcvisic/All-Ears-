const axios = require("axios");
const router = require("express").Router();
const authController = require("../../controllers/authcontroller");



module.exports = function (app, passport) {

    router.get('/signup', authController.signup);

    router.get('/signin', authController.signin);

    router.get('/dashboard', isLoggedIn, authController.dashboard);

    router.get('/logout', authController.logout);

    router.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/dashboard',

        failureRedirect: '/signup'
    }));

    router.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/dashboard',

        failureRedirect: '/signin'
    }

    ));

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
        return next();

        res.redirect('/signin');
    }
}







module.exports = router;
