
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
const searchUsers = (request,response) => {
    const {gender, age} = request.query 
    if(gender && age){
        response.json(
            allUsers.data.filter(u => u.gender === gender && Number(u.dob.age) === Number(age))
        )
    } else if(gender){
        
        response.json(
            allUsers.data.filter(
                (u) => u.gender === gender
            )
        )
    } else if(age){
        
        response.json(
            allUsers.data.filter( u => Number(u.dob.age) === Number(age))
        )
    } else {
        
        response.sendStatus(404)
    }
}