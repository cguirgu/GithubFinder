import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Search = ({ searchUsers, showClear, clearUsers }) => {
	// destructure text (this piece of state), then add a method
	// for setting that piece of state, then put in a default value
	const [text, setText] = useState('')

	const onChange = (e) => this.setText(e.target.value)

	const onSubmit = (e) => {
		e.preventDefault()
		if (this.state.text === '') {
			this.props.setAlert('Please enter something', 'light')
		} else {
			this.props.searchUsers(this.state.text)
			this.setState({ text: '' })
		}
	}

	return (
		<div>
			<form onSubmit={this.onSubmit} className='form'>
				<input
					type='text'
					name='text'
					placeholder='Search Users...'
					value={this.state.text}
					onChange={this.onChange}
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
