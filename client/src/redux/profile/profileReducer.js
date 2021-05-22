import profileTypes from "./profileTypes";

const initialState = {
	usersPosts: []
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case profileTypes.GET_USERS_POSTS_SUCCESS:
			return {
				...state,
				usersPosts: action.payload
			};
		case profileTypes.GET_USERS_POSTS_FAIL:
			return {
				...state,
				usersPosts: []
			};

		default:
			return state;
	}
};

export default profileReducer;
