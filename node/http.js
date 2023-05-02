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
const server = http.createServer((request, response) => {
    const url = request.url;
    // console.log(url);
    const splittedData = request.url.split("/");
    // console.log(splittedData);
  
    const currency = splittedData[2];
    console.log(currency);

    if (request.url === "/") {
        response.write("<h1>Currency Database</h1>");
      } else if (request.url === "/currencies") {
        response.writeHead(200, { "Content-Type": "application/json" });
        response.write(JSON.stringify(currencyJson));
      } else if (
        splittedData.length === 3 &&
        request.url.startsWith("/currencies")
      ) {
        // /currencies/something
        const currenyData = currencyJson.data.find(
          (currency) => currency.id === splittedData[2]
        );
        if (currenyData) {
            response.writeHead(200, { "Content-Type": "application/json" });
            response.write(JSON.stringify(currenyData));
          }
          else {
            response.writeHead(404);
          }
          else {
            response.writeHead(404);
          }
          response.end();
        });
        