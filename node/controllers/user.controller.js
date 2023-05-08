
const allUsers = require('../usersData.json')

const getUsers = (request, response) => {
    response.json(allUsers)
}
