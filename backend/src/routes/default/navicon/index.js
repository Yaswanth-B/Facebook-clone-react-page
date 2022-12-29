// external dependencies
const express = require('express')
const cors = require('cors')
const { NavIcon } = require('../../../mongo/model')

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

	

	NavIcon.find((err, dataArray) => {
		if (err) {
			console.log(err)
			res.sendStatus(404).send({ err: err})
		} else {
			console.log(dataArray)
			if (dataArray.length == 0) {
				res.sendStatus(404).send({ err: "No events found for id: " + user_id})
			} else {				
				res.send(dataArray)	
			}
		}
	})
	

})

router.post('/', (req,res) =>{
	// do validation

	// do other constraint validation

	const newNavIcon = new NavIcon(req.body)
	newNavIcon.save((err, data) => {
		if (err) {
			console.log("NavIcon not added" + err)
			res.sendStatus(401)
		} else {
			res.send(data)
			console.log(data)
		}
	})
})

// {
// 	"feature_name": "Latest News",
// 	"feature_image": "https://i.postimg.cc/RCj4MjnC/news.png",
// 	"feature_link": "link1",
// 	"_id": "63adde3523cac5e46b7186e8",
// 	"__v": 0
// }
module.exports = router