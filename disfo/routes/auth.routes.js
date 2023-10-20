const router = require("express").Router();
const { postSignup,postLogin} = require("../controllers/auth.controller")
const { validateSchema } = require("../middlewares/validate.middleware");
const { userValidationSchema } = require("../validations/user.validator");
const {loginBodyValidationSchema} = require('../validations/auth.validator')

const middleware = validateSchema(userValidationSchema)
const middlewareForLoginReq = validateSchema(loginBodyValidationSchema)

router.post("/signup",middleware,postSignup)
router.post('/login',middlewareForLoginReq,postLogin)

module.exports = router 