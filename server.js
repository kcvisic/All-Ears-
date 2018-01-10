const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs

var db = require("./models");
app.use(routes);



db.sequelize.sync().then(function() {
app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
});
