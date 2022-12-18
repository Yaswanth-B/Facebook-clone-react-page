import Story from "./Story"

const StoryGallery = () => {

	const stories = [
		{id:1, cssname:"story1", link:"https://i.postimg.cc/TPh453Zz/upload.png", text:"Post Story"},
		{id:2, cssname:"story2", link:"https://i.postimg.cc/XNPtfdVs/member-1.png", text:"Alison"},
		{id:3, cssname:"story3", link:"https://i.postimg.cc/4NhqByys/member-2.png", text:"Jackson"},
		{id:4, cssname:"story4", link:"https://i.postimg.cc/FH5qqvkc/member-3.png", text:"Samona"},
		{id:5, cssname:"story5", link:"https://i.postimg.cc/Sx65bPcP/member-4.png", text:"John Doe"},	
		
	]
	return (
		<div className="story-gallery">
			{stories.map((story)=><Story cssname={story.cssname} link={story.link} text={story.text}/>)}
		</div>
	)
}

export default StoryGallery
