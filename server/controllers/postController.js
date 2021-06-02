const getCurrentDate = require("../helpers/getCurrentDate");
const { v4: uuidv4 } = require("uuid");
const Post = require("../models/Post");

// GET ALL POSTS
const getAllPosts = (req, res) => {
	Post.getAll()
		.then((posts) => res.json(posts))
		.catch((err) => res.json(err));
};

// GET POST BY ID
const getPostById = (req, res) => {
	Post.getById(req.params.post_id)
		.then((post) => res.json(post))
		.catch((err) => res.json(err));
};

// ADD POST
const addPost = async (req, res) => {
	const { title, body, imageUrl } = req.body;
	// add uniqe id
	const post_id = uuidv4();
	// add current date
	const date = getCurrentDate();
	// get more details from the token of the logged in user to add to the post
	const { first_name, last_name, user_id } = req.user;
	const author = first_name + " " + last_name;
	// create the new post
	const post = new Post(post_id, user_id, title, body, date, author, imageUrl);
	// add to DB
	post.create(post)
		.then(() => res.json({ msg: "post added successfully", post: post, user: req.user }))
		.catch((err) => res.json(err));
};

// UPDATE POST
const updatePost = (req, res) => {
	const post = req.body;
	Post.update(req.params.post_id, post).then((response) =>
		res.json(response).catch((err) => res.json(err))
	);
};

// DELETE POST
const deletePost = (req, res) => {
	Post.delete(req.params.id)
		.then((response) => res.json(response))
		.catch((err) => res.json(err));
};

module.exports = { getAllPosts, getPostById, addPost, updatePost, deletePost };
