import React, { useState } from 'react'
import PropTypes from 'prop-types'

// Converted a class-based component that had state into a
// functional component that has state using the useState Hook
const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {
	// destructure text (this piece of state), then add a method
	// for setting that piece of state, then put in a default value (useState(''))
	const [text, setText] = useState('')

	const onChange = (e) => setText(e.target.value)

	const onSubmit = (e) => {
		e.preventDefault()
		if (text === '') {
			setAlert('Please enter something', 'light')
		} else {
			searchUsers(text)
			setText('')
		}
	}

	return (
		<div>
			<form onSubmit={onSubmit} className='form'>
				<input
					type='text'
					name='text'
					placeholder='Search Users...'
					value={text}
					onChange={onChange}
				/>
				<input type='submit' className='btn btn-dark btn-block' />
			</form>
			{showClear && (
				<button className='btn btn-light btn-block' onClick={clearUsers}>
					Clear
				</button>
			)}
		</div>
	)
}

Search.propTypes = {
	searchUsers: PropTypes.func.isRequired,
	clearUsers: PropTypes.func.isRequired,
	showClear: PropTypes.bool.isRequired,
	setAlert: PropTypes.func.isRequired,
}
export default Search
