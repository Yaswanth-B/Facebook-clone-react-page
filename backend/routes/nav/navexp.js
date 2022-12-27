const express = require('express')
const router = express.Router()
const cors = require('cors')

//dummy database
const navicons = [
	{ id: 1, link: "https://i.postimg.cc/Fs3m1Djy/notification.png" },
	{ id: 2, link: "https://i.postimg.cc/YqGKZ8nc/inbox.png" },
	{ id: 3, link: "https://i.postimg.cc/xCzpgFjg/video.png" },
]

//Handling CORS exception
router.use(
	cors({
		origin: "*",
	})
)

/**
 * End-point to get the features of the website
 */
router.get('/getnavicons', (req,res) =>{
	res.send(navicons);
})

module.exports = router