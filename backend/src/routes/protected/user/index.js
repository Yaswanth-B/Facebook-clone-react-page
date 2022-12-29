// external dependencies
const express = require('express')
const cors = require('cors')
const { User } = require('../../../mongo/model')

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

	const query_id = req.query.user_id

	User.find({ _id: query_id }, (err, dataArray) => {
		if (err) {
			console.log(err)
			res.sendStatus(404).send({ err: err})
		} else {
			console.log(dataArray)
			if (dataArray.length == 0) {
				res.sendStatus(404).send({ err: "No such user found by id " + query_id})
			} else {
				res.send(dataArray[0])
			}
		}
	})
	

})

router.post('/', (req,res) =>{
	// do validation

	// do other constraint validation

	const newUser = new User(req.body)	
	newUser.save((err, data) => {
		if (err) {
			console.log("Unable to create the user " + err)
			res.sendStatus(401)
		} else {
			res.send(data)
		}
	})
})
	
	


// //Sample Postman input
// // {
// // 	"id": 5, 
// // 	"user" : "Yaswanth",
// // 	"text" : "Sample Text",
// // 	"proflink" : "https://i.postimg.cc/cHg22LhR/profile-pic.png",
// // 	"postlink" : "https://i.postimg.cc/9fjhGTY6/feed-image-1.png", 
// // 	"type" : "post",
// // 	"posttext":"Sample Post Text"
// // 	}
module.exports = router