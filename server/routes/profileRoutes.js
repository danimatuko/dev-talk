const express = require("express");
const { getUsersPosts } = require("../controllers/profileController");
const auth = require("../middlewares/auth");
const router = express.Router();

// DASHBOARD
router.get("/dashboard", auth, getUsersPosts);

module.exports = router;
