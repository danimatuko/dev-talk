import axios from "axios";
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
					token: res.data,
					isLoggedIn: true,
					isLoading: false
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

export const setLoadingUser = () => {
	return { type: authTypes.SET_LOADING_USER };
};
