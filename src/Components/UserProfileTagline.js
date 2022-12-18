import React from 'react'

const UserProfileTagline = ({text, type}) => {
	if(type ==="post"){
	return (
		<>
			<span>{text}</span>
		</>
	)
	}
	else if(type === "status"){
		return (
		<>
			<small>{text}<i className="fas fa-caret-down"></i></small>
		</>
		)
	}
	else if(type === "link"){
		return (
		<>
			 <a href="#">{text}</a>
		</>
		)
	}
}

export default UserProfileTagline
