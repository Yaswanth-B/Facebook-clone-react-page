const express = require('express')
const router = express.Router()
const cors = require('cors')

//dummy database
const setlinks = [
	{ id: 1, link: "https://i.postimg.cc/QCcPNYRV/setting.png", name: "Settings and Privacy" },
	{ id: 2, link: "https://i.postimg.cc/C5tydfK6/help.png", name: "Help and Support" },
	{ id: 3, link: "https://i.postimg.cc/5yt1XVSj/display.png", name: "Display and Accessibility" },
	{ id: 4, link: "https://i.postimg.cc/PJC9GrMb/logout.png", name: "Logout" },
]

//Handling CORS exception
router.use(
	cors({
		origin: "*",
	})
)

/**
 * End-point to get settings options of the website
 */
router.get('/getsetlinks', (req,res) =>{
	res.send(setlinks);
})

module.exports = router