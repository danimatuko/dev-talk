const express = require("express");
const {
	getPostById,
	addPost,
	updatePost,
	getAllPosts,
	deletePost,
	likePost
} = require("../controllers/postController");
const auth = require("../middlewares/auth");
const router = express.Router();

// GET ALL POSTS
router.get("/", getAllPosts);
// GET POST BY ID
router.get("/:post_id", getPostById);

// ADD POST
router.post("/", auth, addPost);

// UPDATE POST
router.put("/:post_id", auth, updatePost);

// DELETE POST
router.delete("/:id", auth, deletePost);

// Like
router.put("/like=:like/:id", likePost);

module.exports = router;
