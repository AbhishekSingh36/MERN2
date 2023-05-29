require('dotenv').config();
const { request, response } = require('express');
const express = require('express')
const {verifyPassword} = require('./middlewares/verifyAuth')
const mongoose = require('mongoose')
//const usersControllers = require('./controllers/users.controllers');
   
const currencyRoutes = require('./routes/currencies.routes')
const usersRoutes = require('./routes/users.routes')
const app = express();
const PORT = 8082

app.use(verifyPassword)
app.get('/', (request,response) => {
    // response.write('<h1>Hello from express</h1>')
    // response.end() 
    // ------- Short--
    response.send('<h1>Currency Database</h1>')
})


app.use('/currencies', currencyRoutes)
app.use('/users',usersRoutes )

app.listen(PORT, () => {
    console.log('Started to listen on PORT:', PORT)
})
