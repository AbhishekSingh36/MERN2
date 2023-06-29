const router = require("express").Router();
const { postSignup} = require("../controllers/auth.controller")
const { validateSchema } = require("../middlewares/validate.middleware");
const { userValidationSchema } = require("../validations/user.validator");

const middleware = validateSchema(userValidationSchema)

router.post("/signup",middleware,postSignup)

module.exports = router 