import React from "react";
import { Link } from "react-router-dom";
import ProfileMenu from "../profileMenu/ProfileMenu";

const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg mb-5" style={{ backgroundColor: "#eee" }}>
			<div className="container">
				<Link className="navbar-brand text-dark" to="/">
					Nature-Story
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse justify-content-lg-end" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="nav-link text-dark active" to="/home">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link text-dark " to="/about">
								About
							</Link>
						</li>
						<li className="nav-item  ">
							<Link
								className="nav-link text-dark border border-dark rounded-3 mx-1"
								to="/register">
								Sign-up
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link text-dark border border-dark rounded-3 mx-1"
								to="/login">
								Login
							</Link>
						</li>
					</ul>
					<ProfileMenu />
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
