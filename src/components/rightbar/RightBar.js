import Conversationelement from "./Conversationelement"
import SideBarTitle from "./SideBarTitle"
import SideBarEvents from "./SideBarEvents"
import SideBarAds from "./SideBarAds"
import { useEffect, useState } from 'react'

const RightBar = () => {
	const [friends, setFriends] = useState([])
	const [events, setEvents] = useState([])
	const [ads, setAds] = useState([])
	

	useEffect(() => {
		fetch(`http://localhost:5000/rightbar/getfriends`)
		.then(response => response.json())
		.then(data => setFriends(data))
	}, [])

	useEffect(() => {
		fetch(`http://localhost:5000/rightbar/getevents`)
		.then(response => response.json())
		.then(data => setEvents(data))
	}, [])
	
	useEffect(() => {
		fetch(`http://localhost:5000/rightbar/getads`)
		.then(response => response.json())
		.then(data => setAds(data))
	}, [])


	return (
		<div class="right-sidebar">
			<SideBarTitle text="Events" option="See All" />

			{events.map((event) => <SideBarEvents day={event.day} month={event.month} eventname={event.eventname}
				location={event.location} />)}

			<SideBarTitle text="Advertisement" option="close" />

			{ads.map((ad) => <SideBarAds link={ad.link} />)}


			<SideBarTitle text="Conversation" option="Hide Chat" />
			{friends.map((friend) => <Conversationelement iconlink={friend.link} text={friend.text} />)}
		</div>
	)
}

export default RightBar
