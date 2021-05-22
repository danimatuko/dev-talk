import React from "react";
import { useSelector } from "react-redux";
import PostRow from "../post-row/PostRow";

const DashboardTable = () => {
	const usersPosts = useSelector((state) => state.profile.usersPosts);

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
					{usersPosts.map((post, index) => (
						<PostRow key={post.post_id} post={post} index={index} />
					))}
				</tbody>
			</table>
		</div>
	);
};

export default DashboardTable;
