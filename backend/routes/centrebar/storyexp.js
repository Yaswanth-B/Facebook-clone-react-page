const express = require('express')
const router = express.Router()
const cors = require('cors')

//dummy database
const stories = [
	{id:1, cssname:"story2", link:"https://i.postimg.cc/XNPtfdVs/member-1.png", text:"Alison"},
	{id:2, cssname:"story3", link:"https://i.postimg.cc/4NhqByys/member-2.png", text:"Jackson"},
	{id:3, cssname:"story4", link:"https://i.postimg.cc/FH5qqvkc/member-3.png", text:"Samona"},
	{id:4, cssname:"story5", link:"https://i.postimg.cc/Sx65bPcP/member-4.png", text:"John Doe"},	
	
]
//Handling CORS exception
router.use(
	cors({
		origin: "*",
	})
)

/**
 * End-point to return other user's stories in the story gallery
 */
router.get('/getstories', (req,res) =>{
	res.send(stories);
})


module.exports = router