// Import the required modules
const express = require("express")
const router = express.Router()

// Import the required controllers and middleware functions
const {
  login,
  signup,
  sendotp,
  changePassword,
} = require("../controllers/Auth")
const {
  resetPasswordToken,
  resetPassword,
} = require("../controllers/ResetPassword")

const { auth } = require("../middlewares/auth")

// Routes for Login, Signup, and Authentication

// ********************************************************************************************************
//                                      Authentication routes
// ********************************************************************************************************

// Route for user login
router.post("/login", login)

// Route for user signup
router.post("/signup", signup)

// Route for sending OTP to the user's email
router.post("/sendotp", sendotp)

// Route for Changing the password
router.post("/changepassword", auth, changePassword)

// ********************************************************************************************************
//                                      Reset Password
// ********************************************************************************************************

// Route for generating a reset password token
router.post("/reset-password-token", resetPasswordToken)

// Route for resetting user's password after verification
router.post("/reset-password", resetPassword)

// Export the router for use in the main application
module.exports = router


// const express = require("express");
// const router = express.Router();

// const {signup,login, sendotp, changePassword} = require("../controllers/Auth");
// const {resetPassword,resetPasswordToken} = require("../controllers/ResetPassword");
// const { auth } = require("../middlewares/auth");

// router.post("/signup",signup);
// router.post("/login",login);

// router.post("/sendotp",sendotp);
// router.post("/changePassword",auth,changePassword);

// router.post("reset-password-token",resetPasswordToken);
// router.post("reset-password",resetPassword);

// module.exports = router;
