const express = require("express");
const todoRoute = require("./todo.route");
const captureDateMiddleware = require("../../middleware/middleware");
const router = express.Router();


// In order to use middleware in router we use router.use instead of app.use router.use(captureDateMiddleware);

router.use("/todos", todoRoute);

// Router Level Middleware
//router.use() adds middleware that applies only to routes defined on a specific router.

router.use(captureDateMiddleware);

// Milestone 5
const testRoute = require("./test.route");
router.use("/test", testRoute);

module.exports = router;
