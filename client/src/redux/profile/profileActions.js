import axios from "axios";
import profileTypes from "./profileTypes";

export const getUsersPosts = (post) => {
	/* To dispatch an aysnc action we use `redux-thunk` middleware, 
	which allows to return a function instead of an action object.
	The function gets the `dispatch` as an argument. */
	return async (dispatch) => {
		try {
			const res = await axios.get("/profile/dashboard");
			dispatch({
				type: profileTypes.GET_USERS_POSTS_SUCCESS,
				payload: res.data
			});
		} catch (error) {
			dispatch({
				type: profileTypes.GET_USERS_POSTS_FAIL
			});
			console.log(console.log(error.message));
		}
	};
};
