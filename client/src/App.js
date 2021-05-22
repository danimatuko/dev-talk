import "./App.css";
import HomePage from "./componenets/pages/HomePage";
import { Switch, Route } from "react-router-dom";
import NewPost from "./componenets/pages/newPost/NewPost";
import NavBar from "./componenets/layout/navBar/NavBar";
import LoginForm from "./componenets/pages/login/LoginForm";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedInUser } from "./redux/auth/authActions";
import { useEffect, useState } from "react";
import Dashboard from "./componenets/pages/dashboard/Dashboard";

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
				<Route path="/login" component={LoginForm} />
				<Route path="/dashboard" component={Dashboard} />
				<Route path="/posts/new-post" component={NewPost} />
				<Route path="/" component={HomePage} />
			</Switch>
		</div>
	);
};

export default App;
