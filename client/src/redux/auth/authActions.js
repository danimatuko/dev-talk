import axios from "axios";
import setAuthToken from "../../helpers/setAuthToken";
import authTypes from "./authTypes";

export const login = (data) => {
	/* To dispatch an aysnc action we use `redux-thunk` middleware, 
	which allows to return a function instead of an action object.
	The function gets the `dispatch` as an argument. */
	return async (dispatch) => {
		try {
			const res = await axios.post("user/login", data);
			dispatch({
				type: authTypes.LOGIN_SUCCESS,
				payload: {
					token: res.data.token,
					userInfo: res.data.user
				}
			});
		} catch (error) {
			dispatch({
				type: authTypes.LOGIN_FAIL
			});
			console.log("Server Error \n" + error);
		}
	};
};

export const getLoggedInUser = () => {
	console.log("getLoggedInUser");
	/* To dispatch an aysnc action we use `redux-thunk` middleware, 
	which allows to return a function instead of an action object.
	The function gets the `dispatch` as an argument. */
	return async (dispatch) => {
		const token = localStorage.token;
		if (localStorage.token) setAuthToken(token);
		try {
			const res = await axios.get("/user/auth");
			if (!res) throw Error;
			dispatch({
				type: authTypes.AUTH_SUCCESS,
				payload: {
					userInfo: res.data,
					isLoggedIn: true,
					isLoading: false
				}
			});
		} catch (error) {
			dispatch({
				type: authTypes.AUTH_FAIL,
				payload: {
					userInfo: null,
					isLoggedIn: false,
					isLoading: false
				}
			});
		}
	};
};

export const logout = () => {
	localStorage.removeItem("token");
	return {
		type: authTypes.LOGOUT
	};
};

export const setLoadingUser = () => {
	return { type: authTypes.SET_LOADING_USER };
};
