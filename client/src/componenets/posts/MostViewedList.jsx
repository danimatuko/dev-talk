import React, { useState, useEffect } from "react";
import MostViewed from "./MostViewed";
import axios from "axios";

const MostViewedList = () => {
	const [posts, setPosts] = useState(null);

	useEffect(() => {
		getMostViewedPosts();
	}, [posts]);

	const getMostViewedPosts = async () => {
		try {
			const res = await axios.get("/posts");
			setPosts(res.data);
		} catch (error) {
			console.error("error in getMostViewPosts \n" + error);
		}
	};

	return (
		<div>
			{posts != null &&
				posts.map((post) => {
					return <MostViewed key={post.post_id} post={post} />;
				})}
		</div>
	);
};

export default MostViewedList;
