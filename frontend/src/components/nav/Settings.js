import Settinglink from "./Settinglink"
import { useState, useEffect } from 'react'
import UserProfile from "../centrebar/UserProfile"

const Settings = () => {
	
	const [setlinks, setSetLinks] = useState([])
	
	useEffect(() => {
		fetch(`http://localhost:5000/nav/settings/getsetlinks`)
		.then(response => response.json())
		.then(data => setSetLinks(data))
	}, [])

	return (
		<div className="settings-menu">
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
