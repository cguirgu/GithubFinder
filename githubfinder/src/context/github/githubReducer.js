// Change the state of certain components when something happens
import {
	SEARCH_USERS,
	SET_LOADING,
	CLEAR_USERS,
	GET_USER,
	GET_REPOS,
} from '../types'

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state, action) => {
	switch (action.type) {
		case SEARCH_USERS:
			return {
				//spread operator; returns the current state
				...state,
				users: action.payload,
				loading: false,
			}
		case GET_USER:
			return {
				...state,
				user: action.payload,
				loading: false,
			}
		case GET_REPOS:
			return {
				...state,
				repos: action.payload,
				loading: false,
			}
		case CLEAR_USERS:
			return {
				...state,
				users: [],
				loading: false,
			}
		case SET_LOADING:
			return {
				...state,
				loading: true,
			}
		default:
			return state
	}
}
