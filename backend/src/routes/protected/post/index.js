// external dependencies
const express = require('express')
const cors = require('cors')
const { Post } = require('../../../mongo/model')

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

	Post.find({ relevant_users: user_id }, (err, dataArray) => {
		if (err) {
			console.log(err)
			res.sendStatus(404).send({ err: err})
		} else {
			console.log(dataArray)
			if (dataArray.length == 0) {
				res.sendStatus(404).send({ err: "No post found for user: " + user_id})
			} else {
				res.send(dataArray)
			}
		}
	})
	

})

router.post('/', (req,res) =>{
	// do validation

	// do other constraint validation

	const newPost = new Post(req.body)
	newPost.save((err, data) => {
		if (err) {
			console.log("Unable to create the user " + err)
			res.sendStatus(401)
		} else {
			res.send(data)
		}
	})
})
	
	
router.put('/addlike', (req,res) =>{
	const post_id = req.query.post_id
	const user_id = req.query.user_id
	const likearr = []
	Post.find({ _id: post_id }, (err, dataArray) => {
		if (err) {
			console.log(err)
			res.sendStatus(404).send({ err: err})
		} else {			
			if (dataArray.length == 0) {
				res.sendStatus(404).send({ err: "No post found"})
			} else {
				likearr = dataArray[0].liked_users
			}
		}
	})
	if(!likearr.includes(user_id)){
		likearr.push(user_id)
	}
	//const update = {liked_users : likearr.push(user_id)}
	//Post.findOneAndUpdate({ _id: post_id }, update, {new:true})
})

// {
// 	"first_name": "Pam",
// 	"last_name": "Smith",
// 	"post_text": "p@gmail.om",
// 	"post_img_link": "Female",
// 	"liked_users": [
// 			"63add4c3cc95dd75178b1c1d"
// 	],
// 	"disliked_users": [
// 			"63add517eab843b730d1f10c"
// 	],
// 	"relevant_users": [
// 			"63add4c3cc95dd75178b1c1d",
// 			"63add517eab843b730d1f10c"
// 	],
// 	"_id": "63add75eeab843b730d1f110",
// 	"post_date": "2022-12-29T18:07:26.369Z",
// 	"__v": 0
// }
module.exports = router