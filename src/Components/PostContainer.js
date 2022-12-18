import ActivityIconsBar from "./ActivityIconsBar"
import PostText from "./PostText"
import UserProfile from "./UserProfile"

const PostContainer = ({ user, text, proflink, postlink, type, posttext }) => {
	return (

		<div className="post-container">
			<div className="post-row">
				<UserProfile user={user} text={text} link={proflink} type={type} />
				<a href="#"><i className="fas fa-ellipsis-v"></i></a>
			</div>
			<PostText text ={posttext}/>
			<img src={postlink} className="post-img" />
			<div className="post-row">
				<ActivityIconsBar likes="120" comments="45" shares="20" proflink={proflink}/>
			</div>
		</div>


	)
}

export default PostContainer
