
const allUsers = require('../usersData.json')

const getUsers = (request, response) => {
    response.json(allUsers)
}
const getUsersWithUuid = (request,response) => {
    const uuid = request.params.uuid;
    const user = allUsers.data.find((u) => u.login.uuid === uuid)
    if(user){
        response.json(user)
    }else{
        
        response.sendStatus(404)
    }
}