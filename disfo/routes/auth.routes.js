const router = require("express").Router();
const { postSignup} = require("../controllers/auth.controller")

router.post("/signup", postSignup)

module.exports = router