import React from "react";
import CreatePostForm from "../../form/createPostForm/CreatePostForm";

const NewPost = () => {
	return (
		<div className="container" style={{ width: "50%" }}>
			<h1 className="text-center">Add New Post</h1>
			<CreatePostForm />
		</div>
	);
};

export default NewPost;
