const bcrypt = require('bcrypt')
const UserService = require('./user.service')
const UserServiceInstance = new UserService();

class AuthService {
    signup = async(user) => {
        console.log(user)
        const hashedPassword =await this.hashpassword(user.password)
        const result = await UserServiceInstance.register({...user,
            password: hashedPassword})
        return result

    };

    hashpassword = async(password) => {
        const salt = await bcryot.genSalt();
        const hash = await bcrypt.hash(password)
        return hash
    }
}

module.exports = AuthService