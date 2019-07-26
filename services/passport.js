const passport      = require('passport');
const User          = require('./../models/User');
const config        = require('./../config');
const JwtStrategy   = require('passport-jwt').Strategy;
const ExtractJwt    = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

// Create local strategy

// By default LocalStrategy it is expecting a username and a password
const localOptions = { usernameField: 'email' };

const localLogin = new LocalStrategy(localOptions, async (email, password, done) => {
  try {
    const user = await User.findOne({ email });
    if(!user) {
      return done(null, false);
    }

    user.comparePassword(password, (err, isMatch) => {
      if(err) return done(err);
      if(!isMatch) {
        return done(null, false);
      }
      return done(null, user);
    });

  } catch(e) {
    done(e, false);
  }
});


// Setup options for Jwt Strategy
// We need to tell our strategy where to look for the token

const jwtOptions = {
  // Tells JWT strategy that whenever a request comes in
  // and we want passport to handle it
  // It needs to look in the header, for the property called "authorization"
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  // tells jwt strategy what secret we used to encode the token
  // so that it can decode it
  secretOrKey: config.secret
};


passport.use(localLogin);