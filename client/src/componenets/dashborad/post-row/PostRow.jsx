import React from "react";

const PostRow = () => {
	return (
		<tr>
			<th scope="row">1</th>
			<td>Mark</td>
			<td>22/5/2021</td>
			<td>True</td>
			<td>
				<button className="btn btn-success btn-sm mx-1">Edit</button>
				<button className="btn btn-danger btn-sm mx-1">Delete</button>
			</td>
		</tr>
	);
};

export default PostRow;
