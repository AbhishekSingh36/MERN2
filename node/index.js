// ------------- Express --------------------

// const express = require("express");
// const app = express();
// const PORT = 8082;

// app.get("/", (request, response) => {
//   response.write("<h1> Hello from Express </h1>");
//   response.end();
// });
// app.listen(PORT, () => {
//   console.log("Started to listen on PORT: ", PORT);
// });

//------------- 2 ------------

const { request, response } = require('express');
const express = require('express')
const app = express();
const PORT = 8082
const usersControllers = require('./controllers/users.controllers')
const currencyRoutes = require('./routes/currencies.routes')

app.get('/', (request,response) => {
    // response.write('<h1>Hello from express</h1>')
    // response.end() 
    // ------- Short--
    response.send('<h1>Currency Database</h1>')
})


app.use('/currencies', currencyRoutes)
app.get('/users', usersControllers.getUsers)
app.get('/users/search', usersControllers.searchUsers)
app.get('/users/:uuid', usersControllers.getUsersWithUuid )


app.listen(PORT, () => {
    console.log('Started to listen on PORT:', PORT)
})
