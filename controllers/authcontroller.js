const bCrypt = require('bcrypt-nodejs');
const db = require("../models");

function generateHash(password) {
  return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
};

module.exports = {
  signUp: function(req, res) {
    console.log("Auth controller signup called");
    console.log(req.body);
    const email = req.body.email;
    db.User.findOne({
      where: {
        email: email,
      }
    }).then(function(user) {
      // if we found  user, return an error...
      if (user) {
        console.log("The email was already taken");
        res.sendStatus(400)
      } else {
        const hashedPassword = generateHash(req.body.password);
        const userData = {
          username: req.body.username,
          email: email,
          password: hashedPassword,
          firstname: req.body.firstname,
          lastname: req.body.lastname
        };
        db.User.create(userData).then(function(newUser) {
          if (!newUser) {
            console.log("Failed to create user");
            res.sendStatus(400)
          } else {
            console.log("Succsesfully created user");
            res.sendStatus(200);
          }
        });
      }
    });
  },
  logout: function(req, res) {
    console.log("Auth controller logout called");
    res.sendStatus(200);
  },
}
