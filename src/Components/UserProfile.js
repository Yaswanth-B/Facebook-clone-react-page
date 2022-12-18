import UserProfileTagline from "./UserProfileTagline"

const UserProfile = ({user, text ,link, type}) => {		
		return (
		<div className="user-profile">
				<img src={link} />
				<div>
					<p>{user}</p>
					<UserProfileTagline text={text} type={type}/>				
				</div>
			</div>
		)	
	
}

export default UserProfile
