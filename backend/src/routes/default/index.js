// external dependencies
const express = require('express')
const cors = require('cors')

// configuring the router
const router = express.Router()
router.use(express.urlencoded({ extended :false }))
router.use(express.json())
router.use(cors({origin: "*",}))  //setting up CORS

//dummy database
const user = [
	{ id: 1, user: "John Nicholson"}
]

/**
 * End-point to return posts to display in user's timeline
 */

/**
 * 
 */
router.get('/', (req,res) =>{
	res.send(user);
})

function validation(){
	return true
}

router.post('/addpost', (req,res) =>{
	if(validation()){
		post = req.body
		user.push(post)
		res.send('Post Added');
	}
	else{
		res.send('Error')
	}
	
})


//Sample Postman input
// {
// 	"id": 5, 
// 	"user" : "Yaswanth",
// 	"text" : "Sample Text",
// 	"proflink" : "https://i.postimg.cc/cHg22LhR/profile-pic.png",
// 	"postlink" : "https://i.postimg.cc/9fjhGTY6/feed-image-1.png", 
// 	"type" : "post",
// 	"posttext":"Sample Post Text"
// 	}
module.exports = router