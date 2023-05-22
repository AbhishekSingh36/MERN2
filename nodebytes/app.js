const express = require('express')
const app = express()
const port = 8081;

app.get("/todos", (request,response) => {
    response.send(todoList);
});

app.listen(port, function(){
    console.log(`Nodejs server started on port ${port}`)
});