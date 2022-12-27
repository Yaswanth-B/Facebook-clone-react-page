const express = require('express')
const router = express.Router()
const cors = require('cors')

//dummy database
const shortcutlinks = [
	{ id: 1, link: "https://i.postimg.cc/3JHVf7vG/shortcut-1.png", text: "Web Developers" },
	{ id: 2, link: "https://i.postimg.cc/rFCbvb1P/shortcut-2.png", text: "Web Design course" },
	{ id: 3, link: "https://i.postimg.cc/0yk3xfZ2/shortcut-3.png", text: "Full Strack Development" },
	{ id: 4, link: "https://i.postimg.cc/Z5wQqdDP/shortcut-4.png", text: "Website Experts" },
]

const implinks = [
	{ id: 1, link: "https://i.postimg.cc/RCj4MjnC/news.png", text: "Latest News" },
	{ id: 2, link: "https://i.postimg.cc/MpBwMtV0/friends.png", text: "Friends" },
	{ id: 3, link: "https://i.postimg.cc/44FRWj1b/group.png", text: "Group" },
	{ id: 4, link: "https://i.postimg.cc/0jh39RtT/marketplace.png", text: "Marketplace" },
	{ id: 5, link: "https://i.postimg.cc/VsXHCTVk/watch.png", text: "Watch" },
	
]
//Handling CORS exception
router.use(
	cors({
		origin: "*",
	})
)

/**
 * End-point to get first 4 shortcuts saved by the user
 */
router.get('/getshortcuts', (req,res) =>{
	res.send(shortcutlinks.slice(0,4));
})


/**
 * End-point to get the functionalities of the website
 */
router.get('/getimplinks', (req,res) =>{
	res.send(implinks);
})

module.exports = router