const JETStrategy = require('pssport-jwt').strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const options = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
}