const express = require('express')
const app = express()


app.get("/todos", (request,response) => {
    response.send(todoList);
});
