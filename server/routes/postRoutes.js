const express = require("express");
const {
	addPost,
	updatePost,
	getAllPosts,
	deletePost
} = require("../controllers/postController");
const router = express.Router();
const { db } = require("../db");

// GET ALL POSTS
router.get("/", getAllPosts);
// ADD POST
router.post("/", addPost);
// UPDATE POST
router.put("/:id", updatePost);
// DELETE POST
router.delete("/:id", deletePost);

module.exports = router;
