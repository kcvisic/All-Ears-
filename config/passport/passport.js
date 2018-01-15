const LocalStrategy = require('passport-local');
const db = require("../../models");
const bCrypt = require('bcrypt-nodejs');

function isValidPassword(hashedPassword, checkPassword) {
  return bCrypt.compareSync(checkPassword, hashedPassword);
}
module.exports = function(passport) {
  const loginStrategy = new LocalStrategy({
      passReqToCallback: true,
    },
    function(req, username, password, done) {
      db.User.findOne({
        where: {
          username: username,
        }
      }).then(function(user) {
        // we did not find the user
        if (!user) {
          console.log(`User: '${username}' does not exist`);
          return done(null, false, {
            message: "The username provided does not exist..."
          });
        }
        // we have found the user
        const validPasssord = isValidPassword(user.password, password);
        if (!validPasssord) {
          console.log(`password for User: '${username}' is incorrect`);
          return done(null, false, {
            message: 'The provided password is incorrect'
          })
        }

        console.log(`Auth signin for ${username} successful`);
        // everything went okay, return the user info...
        return done(null, user.get())

      })
    })

  passport.use(loginStrategy);

  passport.serializeUser(function(user, done) {
    done(null, user.id);

  });

  // deserialize user
  passport.deserializeUser(function(id, done) {
    db.User.findById(id).then(function(user) {
      if (user) {
        done(null, user.get());
      } else {
        done(user.errors, null);
      }
    });
  });
}
