import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl'

export const addComment = (dishId, rating, author, comment) => ({
	type: ActionTypes.ADD_COMMENT,
	payload: {
		dishId: dishId,
		rating: rating,
		author: author,
		comment: comment
	}
});

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