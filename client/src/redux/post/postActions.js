import axios from "axios";
import postTypes from "./postTypes";

export const addPost = (post) => {
	/* To dispatch an aysnc action we use `redux-thunk` middleware, 
	which allows to return a function instead of an action object.
	The function gets the `dispatch` as an argument. */
	return async (dispatch) => {
		try {
			const res = await axios.post("/posts", post);
			dispatch({
				type: postTypes.POST_SUCCESS,
				payload: res.data
			});
		} catch (error) {
			dispatch({
				type: postTypes.POST_FAIL
			});
			console.log(console.log(error.message));
		}
	};
};

export const setEditMode = (state) => {
	return {
		type: postTypes.SET_EDIT_MODE,
		payload: state.editMode
	};
};
// export const setLoadingUser = () => {
// 	return { type: authTypes.SET_LOADING_USER };
// };
