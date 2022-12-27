import Story from "./Story"
import { useState, useEffect } from 'react'
const StoryGallery = () => {
	const [stories, setStories] = useState([])
	useEffect(() => {
		fetch(`http://localhost:5000/centrebar/storygallery/getstories`)
			.then(response => response.json())
			.then(data => setStories(data))
	}, [])

	return (
		<div className="story-gallery">
			<Story cssname="story1" link="https://i.postimg.cc/TPh453Zz/upload.png" text="Post Story" />
			{stories.map((story) => <Story cssname={story.cssname} link={story.link} text={story.text} />)}
		</div>
	)
}

export default StoryGallery
