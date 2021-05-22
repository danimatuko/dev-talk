const express = require("express");
const { addPost, updatePost, getAllPosts, deletePost } = require("../controllers/postController");
const auth = require("../middlewares/auth");
const router = express.Router();

// GET ALL POSTS
router.get("/", getAllPosts);
// NEW POST
// router.get("/new-post", auth, (req, res) => {
// 	res.json({ newPost: "new" });
// });
// ADD POST
router.post("/", auth, addPost);
// UPDATE POST
router.put("/:id", updatePost);
// DELETE POST
router.delete("/:id", deletePost);

module.exports = router;
