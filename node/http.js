// const http = require("http"); // IMPORT
// const data = require("./currencydata.json");

// const server = http.createServer((request, response) => {
//   if (request.url === "/") {
//     response.write("<h1>Currency Database</h1>");
//   } else if (request.url === "/currencies") {
//     response.writeHead(200, { "Content-Type": "application/json" });
//     response.write(JSON.stringify(data));
//   } else {
//     response.writeHead(404);
//   }
//   response.end();
// });

// server.listen(8082, () => {
//   console.log("STARTED TO LISTEN ...");
// });
//-------------------------------

const http = require("http"); // IMPORT
const currencyJson = require("./currencydata.json");