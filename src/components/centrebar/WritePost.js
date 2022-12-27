import InputContainer from "./InputContainer"
import UserProfile from "./UserProfile"

const WritePost = ({user, text, link, type}) => {
	return (
		<div className="write-post-container">			
			<UserProfile user={user} text={text} link={link} type={type}/>
			<InputContainer size="3" user={user}/>
			
		</div>
	)
}

export default WritePost
