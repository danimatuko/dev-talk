const express = require("express");
const { addPost, updatePost, getAllPosts, deletePost } = require("../controllers/postController");
const router = express.Router();

// GET ALL POSTS
router.get("/", getAllPosts);
// NEW POST
router.get("/new-post", (req, res) => {
	console.log("new post");
	res.send("token");
});
// ADD POST
router.post("/", addPost);
// UPDATE POST
router.put("/:id", updatePost);
// DELETE POST
router.delete("/:id", deletePost);

module.exports = router;
