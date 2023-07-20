const {body} = require("express-validator");

const email = body("email")
.notEmpty()
.isEmail()
.withMessage("email is required")
.normalizeEmail();

const password = body("password")
.notEmpty()
.withMessage("password is required");

exports.loginValidation = [email,password];
