import LeftBarLink from './LeftBarLink'

const LeftBar = () => {

	const implinks = [
		{ id: 1, link: "https://i.postimg.cc/RCj4MjnC/news.png", text: "Latest News" },
		{ id: 2, link: "https://i.postimg.cc/MpBwMtV0/friends.png", text: "Friends" },
		{ id: 3, link: "https://i.postimg.cc/44FRWj1b/group.png", text: "Group" },
		{ id: 4, link: "https://i.postimg.cc/0jh39RtT/marketplace.png", text: "Marketplace" },
		{ id: 5, link: "https://i.postimg.cc/VsXHCTVk/watch.png", text: "Watch" },
	]
	const shortcutlinks = [
		{ id: 1, link: "https://i.postimg.cc/3JHVf7vG/shortcut-1.png", text: "Web Developers" },
		{ id: 2, link: "https://i.postimg.cc/rFCbvb1P/shortcut-2.png", text: "Web Design course" },
		{ id: 3, link: "https://i.postimg.cc/0yk3xfZ2/shortcut-3.png", text: "Full Strack Development" },
		{ id: 4, link: "https://i.postimg.cc/Z5wQqdDP/shortcut-4.png", text: "Website Experts" },
	]
	return (
		<div className="left-sidebar">
			<div className="imp-links">
				{implinks.map((imp) => <LeftBarLink iconlink={imp.link} text={imp.text} />)}
				
				<a href="#">See More</a>
			</div>
			<div className="shortcut-link">
				<p>Your Shortcuts</p>
				{shortcutlinks.map((short) => <LeftBarLink iconlink={short.link} text={short.text} />)}
			
			</div>
		</div>
	)
}

export default LeftBar
