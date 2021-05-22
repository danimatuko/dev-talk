import React from "react";

const PostRow = ({ index, post: { post_id, title, date } }) => {
	return (
		<tr>
			<th scope="row">{index+1}</th>
			<td>{title}</td>
			<td>{date}</td>
			<td>True</td>
			<td>
				<button className="btn btn-success btn-sm mx-1">Edit</button>
				<button className="btn btn-danger btn-sm mx-1">Delete</button>
			</td>
		</tr>
	);
};

export default PostRow;
