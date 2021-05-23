import axios from "axios";
import { SHOW_NOTIFICATION, HIDE_NOTIFICATION } from "../toast/toastReducer";
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
				payload: res.data.post
			});

			dispatch({
				type: SHOW_NOTIFICATION,
				payload: "Your post added successfuly!"
			});
		} catch (error) {
			dispatch({
				type: postTypes.POST_FAIL
			});

			dispatch({
				type: HIDE_NOTIFICATION
			});

			console.log(error.message);
		}
	};
};

export const editPost = (post) => {
	/* To dispatch an aysnc action we use `redux-thunk` middleware, 
	which allows to return a function instead of an action object.
	The function gets the `dispatch` as an argument. */
	return async (dispatch) => {
		try {
			const res = await axios.put(`/posts/${post.post_id}`, post);
			dispatch({
				type: postTypes.EDIT_POST_SUCCESS,
				payload: res.data.post
			});

			dispatch({
				type: SHOW_NOTIFICATION,
				payload: "Your post edited successfuly!"
			});
		} catch (error) {
			dispatch({
				type: postTypes.EDIT_POST_FAIL
			});
			dispatch({
				type: HIDE_NOTIFICATION
			});
		}
	};
};

export const setEditMode = (state) => {
	return {
		type: postTypes.SET_EDIT_MODE,
		payload: state.editMode
	};
};

export const deletePost = (id) => {
	/* To dispatch an aysnc action we use `redux-thunk` middleware, 
	which allows to return a function instead of an action object.
	The function gets the `dispatch` as an argument. */
	return async (dispatch) => {
		try {
			const res = await axios.delete(`/posts/${id}`);
			dispatch({
				type: postTypes.DELETE_POST_SUCCESS
			});

			dispatch({
				type: SHOW_NOTIFICATION,
				payload: "Your post deleted successfuly!"
			});
		} catch (error) {
			dispatch({
				type: postTypes.DELETE_POST_FAIL
			});
			dispatch({
				type: HIDE_NOTIFICATION
			});
		}
	};
};
