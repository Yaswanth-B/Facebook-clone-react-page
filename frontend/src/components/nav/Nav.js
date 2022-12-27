import Settings from './Settings'
import NavIcon from './NavIcon';
import { useState, useEffect } from 'react'

const Nav = () => {
	const [navicons, setNavIcons] = useState([])
	const settingsMenuToggle = () => {
		var settingsmenu = document.querySelector(".settings-menu");
		//console.log(settingref.current)
		settingsmenu.classList.toggle("settings-menu-height");
	}

	useEffect(() => {
		fetch(`http://localhost:5000/nav/getnavicons`)
			.then(response => response.json())
			.then(data => setNavIcons(data))
	}, [])

	return (
		<nav>
			<div className="	nav-left">
				<a href={"Index.html"}>
					<img src={"https://i.postimg.cc/Y9nZymQq/logo2.png"} className="logo" />
				</a>
				<ul>
					{navicons.map((navicon) => <NavIcon iconlink={navicon.link} />)}

				</ul>
			</div>
			<div className="nav-right">
				<div className="search-box">
					<img src={"https://i.postimg.cc/SKtHgM6Q/search.png"} />
					<input type="text" placeholder="Search" />
				</div>
				<div className="nav-user-icon online" onClick={settingsMenuToggle}>
					<img src={"https://i.postimg.cc/cHg22LhR/profile-pic.png"} />
				</div>
			</div>
			<Settings />
		</nav>
	)
}

export default Nav
