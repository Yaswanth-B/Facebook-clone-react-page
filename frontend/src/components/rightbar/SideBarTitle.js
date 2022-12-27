const SideBarTitle = ({text, option}) => {
	return (
		<div className="sidebar-title">
				<h4>{text}</h4>
				<a href="#">{option}</a>
		</div>
	)
}

export default SideBarTitle
