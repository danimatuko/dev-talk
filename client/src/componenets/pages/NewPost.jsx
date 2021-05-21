import React, { useEffect } from "react";
import CreatePostForm from "../form/createPostForm/CreatePostForm";
import getLoggedInUser from "../../helpers/getLoggedInUser";

const NewPost = () => {
	useEffect(() => {
		getLoggedInUser();
	}, []);

	return (
		<div className="container" style={{ width: "50%" }}>
			<h1 className="text-center">Add New Post</h1>
			<CreatePostForm />
		</div>
	);
};

export default NewPost;
