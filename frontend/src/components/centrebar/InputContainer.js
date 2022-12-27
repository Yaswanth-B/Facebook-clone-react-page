import InputOptions from "./InputOptions"

const InputContainer = ({size, user}) => {
	const ipoptions = [
		{ id: 1, link: "https://i.postimg.cc/QMD2BDXs/live-video.png", text: "Live Video" },
		{ id: 2, link: "https://i.postimg.cc/6pKKZn0D/photo.png", text: "Photo/Video" },
		{ id: 3, link: "https://i.postimg.cc/Pf6TBCdD/feeling.png", text: "Feeling/Activity" },
	]

	
	return (
		<div className="post-input-container">
				<textarea rows={size} placeholder={"What's on your mind, "+user+"?"}></textarea>
				<div className="add-post-links">
					{ipoptions.map((option) => <InputOptions link={option.link} text={option.text} />)}
				</div>
			</div>
	)
}

export default InputContainer
