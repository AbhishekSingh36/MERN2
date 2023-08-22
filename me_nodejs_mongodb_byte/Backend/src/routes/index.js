const express = require("express");
const todoRoute = require("./todo.route");
const captureDateMiddleware = require("../../middleware/middleware");
const router = express.Router();

router.use("/todos", todoRoute);

// Milestone 5
const testRoute = require("./test.route");
router.use("/test", testRoute);

module.exports = router;