import WritePost from "./WritePost"
import StoryGallery from "./StoryGallery"
import PostContainer from "./PostContainer"
import {useState, useEffect} from 'react'

const CentreBar = () => {
	const [posts, setPosts] = useState([])
	useEffect(() => {
		fetch(`http://localhost:5000/centrebar/getposts`)
		.then(response => response.json())
		.then(data => setPosts(data))
	}, [])

	return (
		<div className="main-content">
			<StoryGallery />
			<WritePost user="John" text="Public" link="https://i.postimg.cc/cHg22LhR/profile-pic.png" type="status" />
			{posts.map((post)=><PostContainer user={post.user} proflink={post.proflink} text={post.text} postlink={post.postlink} type={post.type} posttext={post.posttext}/>)}			
		</div>
	)
}

export default CentreBar
