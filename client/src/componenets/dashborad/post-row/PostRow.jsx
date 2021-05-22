import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setEditMode } from "../../../redux/post/postActions";

const PostRow = ({ index, post: { post_id, title, date } }) => {
	const dispatch = useDispatch();
	return (
		<tr>
			<th scope="row">{index + 1}</th>
			<td>{title}</td>
			<td>{date}</td>
			<td>True</td>
			<td>
				<Link
					to="/posts/new-post"
					className="btn btn-success btn-sm mx-1"
					onClick={() => dispatch(setEditMode({ editMode: true }))}>
					Edit
				</Link>
				<button className="btn btn-danger btn-sm mx-1">Delete</button>
			</td>
		</tr>
	);
};

export default PostRow;
