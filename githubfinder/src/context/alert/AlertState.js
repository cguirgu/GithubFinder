import React, { useReducer } from 'react'
import AlertContext from './alertContext'
import AlertReducer from './alertReducer'
import { SET_ALERT, REMOVE_ALERT } from '../types'

const AlertState = (props) => {
	const initialState = null

	// dispatch a type back to our reducer
	const [state, dispatch] = useReducer(AlertReducer, initialState)

	// Set Alert
	const makeAlert = (msg, type) => {
		dispatch({
			type: SET_ALERT,
			payload: { msg, type },
		})
		setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000)
	}

	// wrap entire application with the provider; takes in 1 prop of value
	return (
		<AlertContext.Provider
			//pass in values we want the entire application to have access to
			value={{
				alert: state,
				makeAlert,
			}}
		>
			{props.children}
		</AlertContext.Provider>
	)
}

export default AlertState
