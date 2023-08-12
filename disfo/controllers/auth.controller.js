const AuthService = require('../services/auth.service')
const AuthServiceInstance = new AuthService() // ask in doubt

const postSignup = async(request,response) => {
    try {
        const data = request.body // email username password
        const result =  await AuthServiceInstance.signup(data)
        response.json(result)
    } catch (err) {
        response.status(500).json(err)
    }
}

const postLogin = async(request,response) => {
    try {
        const {username, password} = request.body // email username password
        const result =  await AuthServiceInstance.login({username, password})
        if (result.isLoggedIn){
            response.json(result);
        }else{
            response.status(403).json({message: "Incorrect Credentials"})
        }
        response.json(result)
    } catch (err) {
        response.status(500).json(err)
    }
}



module.exports = {
    postSignup,
    postLogin
}