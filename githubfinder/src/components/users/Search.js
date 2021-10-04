import React, { useState, useContext } from 'react'
import GithubContext from '../../context/github/githubContext.js'
import AlertContext from '../../context/alert/alertContext.js'

// Converted a class-based component that had state into a
// functional component that has state using the useState Hook
const Search = () => {
	const githubContext = useContext(GithubContext)
	const alertContext = useContext(AlertContext)

	// destructure text (this piece of state), then add a method
	// for setting that piece of state, then put in a default value (useState(''))
	const [text, setText] = useState('')

	const onChange = (e) => setText(e.target.value)

	const onSubmit = (e) => {
		e.preventDefault()
		if (text === '') {
			alertContext.makeAlert('Please enter something', 'light')
		} else {
			githubContext.searchUsers(text)
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
			{githubContext.users.length > 0 && (
				<button
					className='btn btn-light btn-block'
					onClick={githubContext.clearUsers}
				>
					Clear
				</button>
			)}
		</div>
	)
}

export default Search
