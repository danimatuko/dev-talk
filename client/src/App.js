import "./App.css";
import { Switch, Route } from "react-router-dom";
import NewPost from "./componenets/pages/newPost/NewPost";
import NavBar from "./componenets/layout/navBar/NavBar";
import LoginForm from "./componenets/pages/login/LoginForm";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedInUser } from "./redux/auth/authActions";
import { useEffect, useState } from "react";
import Dashboard from "./componenets/pages/dashboard/Dashboard";
import HomePage from "./componenets/pages/homepage/HomePage";
import RegisterForm from "./componenets/pages/register/RegisterForm";

const App = () => {
	const dispatch = useDispatch();
	const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

	useEffect(() => {
		dispatch(getLoggedInUser());
	}, []);

	return (
		<div className="App">
			<NavBar />
			<Switch>
				<Route path="/about"></Route>
				<Route path="/register" component={RegisterForm} />
				<Route path="/login" component={LoginForm} />
				<Route path="/profile/dashboard" component={Dashboard} />
				<Route
					path={["/posts/new-post", "/posts/edit-post/:post_id"]}
					component={NewPost}
				/>
				<Route path="/" component={HomePage} />
			</Switch>
		</div>
	);
};

export default App;
