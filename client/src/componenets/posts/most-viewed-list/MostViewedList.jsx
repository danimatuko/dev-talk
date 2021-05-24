import React, { useState, useEffect } from "react";
import MostViewed from "../most-viewed/MostViewed";
import axios from "axios";

const MostViewedList = () => {
	const [posts, setPosts] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const getMostViewedPosts = async () => {
		setIsLoading(true);

		try {
			const res = await axios.get("/posts");
			const mostViewedPosts = res.data;
			setPosts(mostViewedPosts);
			setIsLoading(false);
		} catch (error) {
			console.error("error in getMostViewPosts \n" + error);
		}
	};

	useEffect(() => {
		getMostViewedPosts();
	}, []);

	return isLoading === true ? (
		<div>isLoading...</div>
	) : (
		<div className="row row-cols-1">
			{posts != null &&
				posts.map((post) => {
					return (
						<div className="col">
							<MostViewed key={post.post_id} post={post} />
						</div>
					);
				})}
		</div>
	);
};

export default MostViewedList;
