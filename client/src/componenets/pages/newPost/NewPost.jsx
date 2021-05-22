import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CreatePostForm from "../../posts/createPostForm/CreatePostForm";

const NewPost = ({ history }) => {
	const dispatch = useDispatch();
	const editMode = useSelector((state) => state.post.editMode);
	return (
		<div className="container" style={{ width: "50%" }}>
			<h1 className="text-center">{editMode ? "Edit Your Post" : "Add New Post"}</h1>
			<CreatePostForm history={history} />
		</div>
	);
};

export default NewPost;
