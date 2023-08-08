const UserService = require('./user.service')
const UserServiceInstance = new UserService();

class AuthService {
    signup = async(user) => {
        console.log(user)
        const result = await UserServiceInstance.register(user)
        return result

    }
}

module.exports = AuthService