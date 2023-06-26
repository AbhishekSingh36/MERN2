const AuthService = require('../services/auth.service')
const AuthServiceInstance = new AuthService()

const postSignup = (request,response) => {
    try {
        const data = request.body 
        const result =  await AuthServiceInstance.signup(data)
        response.json(result)
    } catch (err) {
        response.status(500).json(err)
    }
}

module.exports = {
    postSignup
}