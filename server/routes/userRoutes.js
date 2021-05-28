const express = require("express");
const { getAllUsers } = require("../controllers/userController");
const auth = require("../middlewares/auth");
const router = express.Router();

// GET ALL USERS
router.get("/", getAllUsers);

module.exports = router;
