import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl'

export const addComment = (comment) => ({
	type: ActionTypes.ADD_COMMENT,
	payload: comment
});

export const postComment = (dishId, rating, author, comment) => (dispatch) => {

	const newComment = {
		dishId: dishId,
		rating: rating,
		author: author,
		comment: comment
	};
	newComment.date = new Date().toISOString();
    
	return fetch(baseUrl + 'comments', {
		method: "POST",
		body: JSON.stringify(newComment),
		headers: {
		"Content-Type": "application/json"
		},
		credentials: "same-origin"
	})
	.then(response => {
		if (response.ok) {
		return response;
		} else {
		var error = new Error('Error ' + response.status + ': ' + response.statusText);
		error.response = response;
		throw error;
		}
	},
	error => {
			throw error;
	})
	.then(response => response.json())
	.then(response => dispatch(addComment(response)))
	.catch(error =>  { console.log('post comments', error.message); alert('Your comment could not be posted\nError: '+error.message); });
};

export const fetchDishes = () => (dispatch) => {

	dispatch(dishesLoading(true));

	return fetch(baseUrl + "dishes")
		.then(response => {
			if (response.ok) {
				return response;
			}
			else {
				var error = new Error("Error " + response.status + ": " + response.statusText);
				error.response = response;
				throw error;
			}
		},
		error => {
			var errMess = new Error(error.message);
			throw errMess;
		})
		.then(response => response.json())
		.then(dishes => dispatch(addDishes(dishes)))
		.catch(errMess => dispatch(dishesFailed(errMess.message)))
}

export const dishesLoading = () => ({
	type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
	type: ActionTypes.DISHES_FAILED,
	payload: errmess
});

export const addDishes = (dishes) => ({
	type: ActionTypes.ADD_DISHES,
	payload: dishes
});

export const fetchPromos = () => (dispatch) => {

	dispatch(promosLoading(true));

	return fetch(baseUrl + "promotions")
		.then(response => {
			if (response.ok) {
				return response;
			}
			else {
				var error = new Error("Error " + response.status + ": " + response.statusText);
				error.response = response;
				throw error;
			}
		},
		error => {
			var errMess = new Error(error.message);
			throw errMess;
		})
		.then(response => response.json())
		.then(promos => dispatch(addPromos(promos)))
		.catch(errMess => dispatch(promosFailed(errMess.message)))
}

export const promosLoading = () => ({
	type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
	type: ActionTypes.PROMOS_FAILED,
	payload: errmess
});

export const addPromos = (promos) => ({
	type: ActionTypes.ADD_PROMOS,
	payload: promos
});

export const fetchComments = () => (dispatch) => {

	return fetch(baseUrl + "comments")
		.then(response => {
			if (response.ok) {
				return response;
			}
			else {
				var error = new Error("Error " + response.status + ": " + response.statusText);
				error.response = response;
				throw error;
			}
		},
		error => {
			var errMess = new Error(error.message);
			throw errMess;
		})
		.then(response => response.json())
		.then(comments => dispatch(addComments(comments)))
		.catch(errMess => dispatch(commentsFailed(errMess.message)))

}

export const commentsFailed = (errmess) => ({
	type: ActionTypes.COMMENTS_FAILED,
	payload: errmess
});

export const addComments = (comments) => ({
	type: ActionTypes.ADD_COMMENTS,
	payload: comments
});



export const fetchLeaders = () => (dispatch) => {

	dispatch(leadersLoading(true));

	return fetch(baseUrl + "leaders")
		.then(response => {
			if (response.ok) {
				return response;
			}
			else {
				var error = new Error("Error " + response.status + ": " + response.statusText);
				error.response = response;
				throw error;
			}
		},
		error => {
			var errMess = new Error(error.message);
			throw errMess;
		})
		.then(response => response.json())
		.then(leaders => dispatch(addLeaders(leaders)))
		.catch(errMess => dispatch(leadersFailed(errMess.message)))

}

export const leadersLoading = () => ({
	type: ActionTypes.LEADERS_LOADING
})


export const leadersFailed = (errmess) => ({
	type: ActionTypes.LEADERS_FAILED,
	payload: errmess
});

export const addLeaders = (leaders) => ({
	type: ActionTypes.ADD_LEADERS,
	payload: leaders
});



export const postFeedback = (valuesObject) => {

	const newFeedback = {
		firstname: valuesObject.firstname,
		lastname: valuesObject.lastname,
		telnum: valuesObject.telnum,
		email: valuesObject.email,
		agree: valuesObject.agree,
		contactType: valuesObject.contactType,
		message: valuesObject.message,
		date: new Date().toISOString()
	};

	return fetch(baseUrl + 'feedback', {
		method: "POST",
		body: JSON.stringify(newFeedback),
		headers: {
		"Content-Type": "application/json"
		},
		credentials: "same-origin"
	})
	.then(response => {
		if (response.ok) {
			return response;
		} else {
			var error = new Error('Error ' + response.status + ': ' + response.statusText);
			error.response = response;
			throw error;
		}
	},
	error => {
			throw error;
	})
	.then(response => response.json())
	.then(response => { alert('Your comment submited is \n'+ JSON.stringify(response)); })
	.catch(error =>  { alert('Your comment could not be posted\nError: '+ error.message); });
};