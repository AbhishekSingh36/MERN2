const express = require("express");
const router = express.Router();
const Todos = require("../../models/todo.model");

/**
 * Get all TODOS:
 * curl http://localhost:8082/v1/todos
 *
 * Get todos with their "startDate" b/w startDateMin and startDateMax
 * curl http://localhost:8082/v1/todos?startDateMin=2020-11-04&startDateMax=2020-12-30
 * 
 */

 router.get("/", async (req, res) => {
   console.log(
     `URL:  /v1/todos${req.url == "/" ? "" : req.url}, Method:  ${req.method}, Timestamp: ${new Date()}`
   );
   const allTodos = await Todos.find({});
   res.send(allTodos);
});

router.post("/", async (req, res) => {
  console.log(
    `URL:  /v1/todos${req.url == "/" ? "" : req.url}, Method:  ${req.method}, Timestamp: ${new Date()}`
  );
  console.log("Request body with (req param): ", req.body);
  //console.log("Response Body undefined as of Now:", res.body)

  let newTodo = {
    name: req.body.name,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
  };

  const newlyCreated = await Todos.create(newTodo);
  res.status(201).send(newlyCreated)

  
 Todos.create(newTodo, (err, newlyCreated) => {
   if (err) {
     console.log(err,"Error log");
     res.status(500).send();
   } else {
     console.log("New todo item added: ", newlyCreated);
     res.status(201).send(newlyCreated);
   }
 });
});

router.put("/", async(req,res)=> {
  console.log("Request Body", req.body);
  console.log(`URL:  /v1/todos${req.url == "/" ? "" : req.url}, Method:  ${req.method}, Timestamp: ${new Date()}`)
 })

/**
 * Add a TODO to the list
 * curl -X POST http://localhost:8082/v1/todos \
    -d '{"name": "Learn Nodejs by doing","startDate": "2021-01-07","endDate": "2021-01-09"}' \
    -H 'Content-Type: application/json'
*/
// router.post("/", async (req, res) => {

// });

/**
 * Update an existing TODO
 * curl -v -X PUT http://localhost:8082/v1/todos \
    -d '{"_id": "<id-value>", "name": "Play tennis","startDate": "2021-01-07","endDate": "2021-01-09"}' \
    -H 'Content-Type: application/json'
 * 
 * Nb: You'll need to change the "id" value to that of one of your todo items
*/
// router.put("/", (req, res) => {

// });

/**
 * Delete a TODO from the list
 * curl -v -X "DELETE" http://localhost:8082/v1/todos/<id-value>
 *
 * Nb: You'll need to change "<id-value>" to the "id" value of one of your todo items
 */
// router.delete("/:id", (req, res) => {

// });



module.exports = router;
