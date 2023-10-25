const JETStrategy = require('pssport-jwt').strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const options = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    SecretOrKey: process.env.JWT_Secret
}

const strategy = new JWTStrategy(options, async(payload,done) => {
    done(null, true)
})

module.exports = (passport) => {
    passport.use(strategy);
}