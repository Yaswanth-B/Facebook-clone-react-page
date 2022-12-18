import Settinglink from "./Settinglink"
import { useRef } from 'react'
import UserProfile from "./UserProfile"

const Settings = () => {
	


	const settingref = useRef()
	const setlinks = [
		{ id: 1, link: "https://i.postimg.cc/QCcPNYRV/setting.png", name: "Settings and Privacy" },
		{ id: 2, link: "https://i.postimg.cc/C5tydfK6/help.png", name: "Help and Support" },
		{ id: 3, link: "https://i.postimg.cc/5yt1XVSj/display.png", name: "Display and Accessibility" },
		{ id: 4, link: "https://i.postimg.cc/PJC9GrMb/logout.png", name: "Logout" },
	]
	return (
		<div className="settings-menu" ref={settingref}>
			<div id="dark-btn">
				<span></span>
			</div>
			<div className="settings-menu-inner">
				<UserProfile user="John" text="See your profile" link="https://i.postimg.cc/cHg22LhR/profile-pic.png" type="link" />
				<hr />
				<UserProfile user="Give Feedback" text="Help us to improve the new design" link="https://i.postimg.cc/hv3nx52s/feedback.png" type="link" />
				<hr />
				{setlinks.map((setlink) => <Settinglink iconlink={setlink.link} name={setlink.name} />)}


			</div>
		</div>
	)
}

export default Settings
