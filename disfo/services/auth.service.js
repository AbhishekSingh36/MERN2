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
            return {isLoggedIn: true}
        } else {
            return {isLoggedIn: false}
        }
    }
    
}

module.exports = AuthService