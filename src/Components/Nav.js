import Settings from './Settings'
import NavIcon from './NavIcon';

const Nav = () => {

	const settingsMenuToggle = () =>{
		var settingsmenu = document.querySelector(".settings-menu");
		//console.log(settingref.current)
		settingsmenu.classList.toggle("settings-menu-height");
	}
	const navicons = [
		{id:1,link:"https://i.postimg.cc/Fs3m1Djy/notification.png"},
		{id:2,link:"https://i.postimg.cc/YqGKZ8nc/inbox.png"},
		{id:3,link:"https://i.postimg.cc/xCzpgFjg/video.png"},
	]

	return (
		<nav>
			<div className="	nav-left">
				<a href={"Index.html"}>
					<img src={"https://i.postimg.cc/Y9nZymQq/logo2.png"} className="logo"/>			
				</a>
				<ul>
					{navicons.map((navicon)=><NavIcon iconlink={navicon.link}/>)}
					
				</ul>
			</div>
			<div className="nav-right">
                <div className="search-box">
                    <img src={"https://i.postimg.cc/SKtHgM6Q/search.png"}/>
                    <input type="text" placeholder="Search"/>
                </div>
                <div className="nav-user-icon online" onClick={settingsMenuToggle}>
                    <img src={"https://i.postimg.cc/cHg22LhR/profile-pic.png"}/>
                </div>
            </div>
			<Settings/>
		</nav>
	)
}

export default Nav
