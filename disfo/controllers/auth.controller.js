const AuthService = require('../services/auth.service')
const AuthServiceInstance = new AuthService()

const postSignup = async(request,response) => {
    try {
        const data = request.body 
        const result =  await AuthServiceInstance.signUp(data)
        response.json(result)
    } catch (err) {
        response.status(500).json(err)
    }
}

module.exports = {
    postSignup
}