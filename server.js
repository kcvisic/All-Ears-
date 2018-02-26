const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const passport = require("passport");
const session = require('express-session');
const env = require('dotenv').load();
const flash = require('connect-flash');
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
const db = require("./models");

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(passport.initialize());
app.use(passport.session());

// set up passport login...
require('./config/passport/passport')(passport);

// initialize all of our application routes...
require('./routes')(app, passport);

db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
  });
});