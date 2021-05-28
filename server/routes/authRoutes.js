const express = require("express");
const { register, login, getLoggedInUser } = require("../controllers/authController");
const auth = require("../middlewares/auth");
const router = express.Router();

// REGISTER
router.post("/register", register);
// LOGIN
router.post("/login", login);
// AUTH (LOGGED IN USRE)
router.get("/", auth, getLoggedInUser);

module.exports = router;
