const SideBarEvents = ({day,month,eventname, location}) => {
	return (
		<div className="event">
				<div className="left-event">
						<h3>{day}</h3>
						<span>{month}</span>
				</div>
				<div className="right-event">
						<h4>{eventname}</h4>
						<p><i class="fas fa-map-marker-alt"></i>{location}</p>
						<a href="#">More Info</a>
				</div>
		</div>
	)
}

export default SideBarEvents
