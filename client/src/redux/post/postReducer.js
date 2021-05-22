import postTypes from "./postTypes";

const initialState = {
	tite: "",
	body: "",
	imageUrl: ""
};

const postReducer = (state = initialState, action) => {
	switch (action.type) {
		case postTypes.POST_SUCCESS:
			return {
				...state,
				title: action.payload.title,
				body: action.payload.body,
				imageUrl: action.payload.imageUrl
			};
		case postTypes.POST_FAIL:
			return {
				...state,
				title: "",
				body: "",
				imageUrl: ""
			};
		default:
			return state;
	}
};

export default postReducer;
