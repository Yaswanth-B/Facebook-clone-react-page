
const Story = ({cssname, link, text}) => {
	let cssnameapp = "story "+cssname
	return (		
		<div className={cssnameapp}>
			<img src={link}/>
				<p>{text}</p>
		</div>
	)
}

export default Story
