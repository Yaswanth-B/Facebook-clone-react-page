const Settinglink = ({iconlink, name}) => {
	return (
		<div className="settings-links">
			<img src={iconlink} className="settings-icon" />
			<a href="#">{name}<img src={"https://i.postimg.cc/RF1dBMWr/arrow.png"} width="10px" /></a>
		</div>

	)
}

export default Settinglink
