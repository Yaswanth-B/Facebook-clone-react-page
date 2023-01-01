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
 * End-point to return events from the database
 */
router.get('/', (req,res) =>{
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

/**
 * End-point to add an event to the database
 */
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

// {
// 	"event_name": "Social Media",
// 	"location": "Hyderabad",
// 	"interested_users": [
// 			"63add517eab843b730d1f10c",
// 			"63add4c3cc95dd75178b1c1d"
// 	],
// 	"_id": "63add869fe4fd12926322c0e",
// 	"event_date": "2022-12-29T18:11:53.100Z",
// 	"__v": 0
// }

module.exports = router