
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
    } else if(!gender && !age){
        return response
            .status(422)
            .json({message: 'Please give gender or age or both'})
    } else if(age){
        if(!Number(age)){
            return response
            .status(422)
            .json({message: 'Age should be a number'})
        }
        else if(Number(age) < 0 || Number(age) >= 100){
            return response
            .status(422)
            .json({message: 'Age should be between 0-100'})
        }
    }
    else if(gender){
        
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
module.exports = {
    getUsers,searchUsers, getUsersWithUuid
}