import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getLoggedInUser } from "../../../redux/auth/authActions";
import { getPostById } from "../../../redux/post/postActions";

const FullPost = ({ match }) => {
	const { post_id } = match.params;
	const post = useSelector((state) => state.post);
	const userInfo = useSelector((state) => state.auth.userInfo);
	const dispatch = useDispatch();
	const { title, body, imageUrl, date, author } = post;

	useEffect(() => {
		dispatch(getLoggedInUser);
		dispatch(getPostById(post_id));
	}, []);

	return (
		<div className="container">
			<div className="bg-white py-5 px-0">
				<div className="row justify-content-center">
					<div className="col-lg-8">
						<h1 className="text-capitalize display-1 mb-5">{title}</h1>

						<div className="author mb- text-capitalize">{author}</div>
						<small className="">{date} </small>
						<div className="img-wrapper mt-3 bg-dark">
							<img
								src={imageUrl}
								alt="image"
								style={{ width: "100%", maxHeight: "500px", objectFit: "cover" }}
							/>
						</div>
						<div className="my-3">{body}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FullPost;
