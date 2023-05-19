const http = require('http');
const port = 8081;
let todoList = ["Complete Node Byte", "Play Cricket"];

http.createServer((request, response) => {
    const { method, url } = request;

    if (url == "/todos") {

        /* Get all TODOS:   
        ** curl -v http://localhost:8081/todos
        */
        if (method === "GET") {
            response.writeHead(200);
            response.write(todoList.toString())

        }
        /* Add a TODO to the list
        ** curl -v -X POST -d '{"name":"Plan for next week"}' http://localhost:8081/todos -H 'content-type:application/json'
        */
        else if (method === "POST") {
            let body = '';

            request.on('error', (err) => {
                console.error(err);

            }).on('data', (chunk) => {
                body += chunk;