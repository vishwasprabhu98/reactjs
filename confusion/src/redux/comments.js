import * as ActionTypes from './ActionTypes';

export const Comments = (state = {
		errMess: null,
		comments: []
		//only during initial load the comments are empty
		//after it loads the comments will not be empty even if this reducer
		//is called again and again because the state will be set previously.
	}, action) => {
	switch(action.type){

		case ActionTypes.ADD_COMMENTS:
		return {...state, errMess: null, comments: action.payload};

		case ActionTypes.COMMENTS_FAILED:
		return {...state, errMess: action.payload};

		case ActionTypes.ADD_COMMENT:
			var comment = action.payload;
			return {...state, comments: state.comments.concat(comment)};

		default:
			return state;
	}
};
