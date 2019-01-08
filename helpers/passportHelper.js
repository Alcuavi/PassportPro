const Passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('models/user');

Passport.serializeUser((user, done) => {
    done(null, user.id);
});

Passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        return(null, user);
    })
});

Passport.use(new LocalStrategy({passwordField: 'pass'},
    (username, password, done)=> {
    User.findOne({where: {username: username, pass: password}}).then(user => {
        if (!user) return done (null, false, {message: 'El usuario no existe'});
        return done(null, user);
    }).error(err => {
        return done(err)
    })
}
));

module.exports = Passport;