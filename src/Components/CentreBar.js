import WritePost from "./WritePost"
import StoryGallery from "./StoryGallery"
import PostContainer from "./PostContainer"


const CentreBar = () => {

	const posts = [
		{ id: 1, user: "John Nicholson", text: "June 24 2021, 13:40 pm", proflink: "https://i.postimg.cc/cHg22LhR/profile-pic.png", postlink: "https://i.postimg.cc/9fjhGTY6/feed-image-1.png", type: "post", posttext:"Like and share this video with friends"},
		{ id: 2, user: "John Nicholson", text: "June 24 2021, 13:40 pm", proflink: "https://i.postimg.cc/cHg22LhR/profile-pic.png", postlink: "https://i.postimg.cc/Xvc0xJ2p/feed-image-2.png", type: "post", posttext: "Like and share this video with friends" },
		{ id: 3, user: "John Nicholson", text: "June 24 2021, 13:40 pm", proflink: "https://i.postimg.cc/cHg22LhR/profile-pic.png", postlink: "https://i.postimg.cc/tJ7QXz9x/feed-image-3.png", type: "post", posttext: "Like and share this video with friends" },
		{ id: 4, user: "John Nicholson", text: "June 24 2021, 13:40 pm", proflink: "https://i.postimg.cc/cHg22LhR/profile-pic.png", postlink: "https://i.postimg.cc/hjDRYBwM/feed-image-4.png", type: "post", posttext: "Like and share this video with friends" },
		{ id: 5, user: "John Nicholson", text: "June 24 2021, 13:40 pm", proflink: "https://i.postimg.cc/cHg22LhR/profile-pic.png", postlink: "https://i.postimg.cc/ZRwztQzm/feed-image-5.png", type: "post", posttext: "Like and share this video with friends" },
	]

	return (
		<div className="main-content">
			<StoryGallery />
			<WritePost user="John" text="Public" link="https://i.postimg.cc/cHg22LhR/profile-pic.png" type="status" />
			{posts.map((post)=><PostContainer user={post.user} proflink={post.proflink} text={post.text} postlink={post.postlink} type={post.type} posttext={post.posttext}/>)}			
		</div>
	)
}

export default CentreBar
