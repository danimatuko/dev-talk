import React from "react";
import CreatePostForm from "../../posts/createPostForm/CreatePostForm";

const NewPost = ({ history }) => {
	return (
		<div className="container" style={{ width: "50%" }}>
			<h1 className="text-center">Add New Post</h1>
			<CreatePostForm history={history} />
		</div>
	);
};

export default NewPost;
