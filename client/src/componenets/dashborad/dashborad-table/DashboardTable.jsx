import React from "react";
import PostRow from "../post-row/PostRow";

const DashboardTable = () => {
	return (
		<div className="my-5">
			<h3>Your Posts</h3>
			<table className="table table-striped">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Title</th>
						<th scope="col">Date</th>
						<th scope="col">Allow Comments</th>
						<th scope="col"></th>
					</tr>
				</thead>
				<tbody>
					<PostRow />
					<PostRow />
					<PostRow />
				</tbody>
			</table>
		</div>
	);
};

export default DashboardTable;
