// external dependencies
const express = require('express')
const cors = require('cors')
const { Story } = require('../../../mongo/model')

// configuring the router
const router = express.Router()
router.use(express.urlencoded({ extended :false }))
router.use(express.json())
router.use(cors({origin: "*",}))  //setting up CORS


/**
 * End-point to return posts to display in user's timeline
 */

/**
 * 
 */
router.get('/', (req,res) =>{
	// validate

	const user_id = req.query.user_id

	Story.find({ relevant_users: user_id }, (err, dataArray) => {
		if (err) {
			console.log(err)
			res.sendStatus(404).send({ err: err})
		} else {
			console.log(dataArray)
			if (dataArray.length == 0) {
				res.sendStatus(404).send({ err: "No stories found for" + user_id})
			} else {
				res.send(dataArray)
			}
		}
	})
	

})

router.post('/', (req,res) =>{
	// do validation

	// do other constraint validation

	const newStory = new Story(req.body)	
	newStory.save((err, data) => {
		if (err) {
			console.log("Unable to create the story " + err)
			res.sendStatus(401)
		} else {
			res.send(data)
			console.log(data)
		}
	})
})
	
	

	
// {
// 	"story_text": "Alison",
// 	"story_img_link": "https://i.postimg.cc/XNPtfdVs/member-1.png",
// 	"story_link": "link1",
// 	"relevant_users": [
// 			"63add4c3cc95dd75178b1c1d",
// 			"63add517eab843b730d1f10c"
// 	],
// 	"_id": "63addc731267fac85887aaf0",
// 	"story_date": "2022-12-29T18:29:07.657Z",
// 	"__v": 0
// }
module.exports = router