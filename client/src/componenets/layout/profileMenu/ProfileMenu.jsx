import React from "react";

const ProfileMenu = () => {
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
					<a className="dropdown-item" href="#">
						Logout
					</a>
				</li>
				<li>
					<a className="dropdown-item" href="posts/new-post">
						Add Post
					</a>
				</li>
				<li>
					<a className="dropdown-item" href="#">
						Dashboard
					</a>
				</li>
			</ul>
		</div>
	);
};

export default ProfileMenu;
