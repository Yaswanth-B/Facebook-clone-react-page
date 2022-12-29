// external dependencies
const express = require('express')
const cors = require('cors')
const { Event } = require('../../../mongo/model')

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

	Event.find({ interested_users: user_id }, (err, dataArray) => {
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

	const newEvent = new Event(req.body)
	newEvent.save((err, data) => {
		if (err) {
			console.log("Event not added" + err)
			res.sendStatus(401)
		} else {
			res.send(data)
			console.log("Event added" + data)
		}
	})
})


module.exports = router