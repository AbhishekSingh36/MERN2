const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const UserService = require('./user.service')
const UserServiceInstance = new UserService();

class AuthService {
    signup = async(user) => {
        console.log(user)
        const hashedPassword =await this.hashpassword(user.password)
        const result = await UserServiceInstance.register({... user,
            password: hashedPassword})
        return result

    };

    hashpassword = async(password) => {
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(password, salt)
        return hash
    }

    login = async ({username, password}) => {
        const user = await UserServiceInstance.findByUsername(username)
        if(!user){
            return {isLoggedIn: false}
        }
        const isPasswordMatching = await bcrypt.compare(password, user.password)
        if(isPasswordMatching){
            return {isLoggedIn: true, jwt:this.generateToken(_id)}
        } else {
            return {isLoggedIn: false}
        }
    }

    generateToken = (userId) => {
        secret = "secretKey"
        const payload = {
            userId
        }
        const options = {
            expiresIn: "1h"
        };
        const token = jwt.sign(payload, this.secret, options)
        return token;
    }
    
}

module.exports = AuthService