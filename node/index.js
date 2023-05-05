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

const { request, response } = require('express');
const express = require('express')
const currencyJson = require('./currencydata.json')
const app = express();
const PORT = 8082

app.get('/', (request,response) => {
    // response.write('<h1>Hello from express</h1>')
    // response.end() 
    // ------- Short--
    response.send('<h1>Currency Database</h1>')
})
app.get('/currencies', (request, response) => {
    response.json({currencyJson})
})