import Conversationelement from "./Conversationelement"
import SideBarTitle from "./SideBarTitle"
import SideBarEvents from "./SideBarEvents"
import SideBarAds from "./SideBarAds"

const RightBar = () => {

	const events = [
		{ id: 1, day: "18", month: "Feb", eventname: "Social Media", location: "Willson Tech Park" },
		{ id: 2, day: "22", month: "June", eventname: "Mobile Marketing", location: "Willson Tech Park" },
	]

	const ads = [
		{ id: 1, link: "https://i.postimg.cc/CLXYx9BL/advertisement.png"},
	]

	const friends = [
		{ id: 1, link: "https://i.postimg.cc/XNPtfdVs/member-1.png", text: "Alison Mina" },
		{ id: 2, link: "https://i.postimg.cc/4NhqByys/member-2.png", text: "Jackson Aston" },
		{ id: 3, link: "https://i.postimg.cc/FH5qqvkc/member-3.png", text: "Samona Rose" },
		{ id: 4, link: "https://i.postimg.cc/Sx65bPcP/member-4.png", text: "Mike Pérez" },

	]
	return (
		<div class="right-sidebar">
			<SideBarTitle text="Events" option="See All" />

			{events.map((event) =><SideBarEvents day={event.day} month={event.month} eventname={event.eventname} 
			location={event.location} />)}

			<SideBarTitle text="Advertisement" option="close" />

			{ads.map((ad)=><SideBarAds link={ad.link}/>)}
		

			<SideBarTitle text="Conversation" option="Hide Chat" />
			{friends.map((friend)=><Conversationelement iconlink={friend.link} text={friend.text} />)}			
		</div>
	)
}

export default RightBar
