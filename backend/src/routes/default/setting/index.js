// external dependencies
const express = require('express')
const cors = require('cors')
const { Setting } = require('../../../mongo/model')

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

	

	Setting.find((err, dataArray) => {
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

	const newSetting = new Setting(req.body)
	newSetting.save((err, data) => {
		if (err) {
			console.log("Setting not added" + err)
			res.sendStatus(401)
		} else {
			res.send(data)
			console.log(data)
		}
	})
})

// {
// 	"setting_image": "https://i.postimg.cc/PJC9GrMb/logout.png",
// 	"setting_link": "link4",
// 	"setting_text": "Logout",
// 	"_id": "63ade4785510db16c55b6e56",
// 	"__v": 0
// }
module.exports = router