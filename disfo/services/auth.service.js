const bcrypt = require('bcrypt')
const UserService = require('./user.service')
const UserServiceInstance = new UserService();

class AuthService {
    signup = async(user) => {
        console.log(user)
        const result = await UserServiceInstance.register(user)
        return result

    };

    hashpassword = async(password) => {
        const salt = await bcryot.genSalt();
        const hash = await bcrypt.hash(password)
    }
}

module.exports = AuthService