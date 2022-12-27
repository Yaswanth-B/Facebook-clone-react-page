const Conversationelement = ({iconlink, text}) => {
	return (
		<div class="online-list">
				<div class="online">
						<img src={iconlink}/>
				</div>
				<p>{text}</p>
		</div>
	)
}

export default Conversationelement
