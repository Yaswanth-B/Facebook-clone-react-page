const express = require('express')
const router = express.Router()
const uuid = require('uuid');
const cors = require("cors")

const friends = [
	{ id: 1, link: "https://i.postimg.cc/XNPtfdVs/member-1.png", text: "Alison Mina" },
	{ id: 2, link: "https://i.postimg.cc/4NhqByys/member-2.png", text: "Jackson Aston" },
	{ id: 3, link: "https://i.postimg.cc/FH5qqvkc/member-3.png", text: "Samona Rose" },
	{ id: 4, link: "https://i.postimg.cc/Sx65bPcP/member-4.png", text: "Mike Pérez" },

]

const events = [
	{ id: 1, day: "18", month: "Feb", eventname: "Social Media", location: "Willson Tech Park" },
	{ id: 2, day: "22", month: "June", eventname: "Mobile Marketing", location: "Willson Tech Park" },
]

const ads = [
	{ id: 1, link: "https://i.postimg.cc/CLXYx9BL/advertisement.png" },
]

//Handling CORS exception
router.use(
	cors({
		origin: "*",
	})
)

/**
 * End-point to get first 4 friends/ 4 most recent conversations 
 * for the current user
 */
router.get('/getfriends/', (req, res) => {
	res.send(friends.slice(0,4));
})

/**
 * End-point to get events for that user from the server
 */
router.get('/getevents/', (req, res) => {
	res.send(events);
})

/**
 * End-point to get ads for that user from the server
 */
router.get('/getads/', (req, res) => {
	res.send(ads);
})

// router.post('/addconversation/', (req,res) =>{
// var link = req.body.link;
// var text = req.body.text;
// friends
// console.log(uuid.v4());		

// res.send("hi")
//res.send(req);
// })


module.exports = router