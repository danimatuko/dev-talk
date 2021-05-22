import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getLoggedInUser, logout } from "../../../redux/auth/authActions";
import { setEditMode } from "../../../redux/post/postActions";

const ProfileMenu = () => {
	useEffect(() => {
		dispatch(getLoggedInUser());
	}, []);

	const {
		isLoading,
		userInfo: { first_name }
	} = useSelector((state) => state.auth);

	const dispatch = useDispatch();

	return (
		<div className="nav-item dropdown ">
			<a
				className="dropdown-toggle text-dark mx-1"
				href="#"
				role="button"
				id="dropdownMenuLink"
				data-bs-toggle="dropdown"
				aria-expanded="false">
				<i className="fas fa-user-circle fa-2x"></i>
			</a>

			<ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
				<li>
					<span className="dropdown-header">
						<h6 className="m-0 border-bottom">Hi {!isLoading && first_name}</h6>
					</span>
				</li>

				<li>
					<Link className="dropdown-item" to="/logout" onClick={() => dispatch(logout())}>
						Logout
					</Link>
				</li>
				<li>
					<Link
						className="dropdown-item"
						to="/posts/new-post"
						onClick={() => dispatch(setEditMode({ editMode: false }))}>
						Add Post
					</Link>
				</li>
				<li>
					<Link className="dropdown-item" to="/profile/dashboard">
						Dashboard
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default ProfileMenu;
