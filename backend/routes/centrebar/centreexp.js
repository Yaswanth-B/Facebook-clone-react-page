const express = require('express')
const router = express.Router()
const cors = require('cors')
router.use(express.urlencoded({ extended :false }))
router.use(express.json())

//dummy database
const posts = [
	{ id: 1, user: "John Nicholson", text: "June 24 2021, 13:40 pm", proflink: "https://i.postimg.cc/cHg22LhR/profile-pic.png", postlink: "https://i.postimg.cc/9fjhGTY6/feed-image-1.png", type: "post", posttext:"Like and share this video with friends"},
	{ id: 2, user: "John Nicholson", text: "June 24 2021, 13:40 pm", proflink: "https://i.postimg.cc/cHg22LhR/profile-pic.png", postlink: "https://i.postimg.cc/Xvc0xJ2p/feed-image-2.png", type: "post", posttext: "Like and share this video with friends" },
	{ id: 3, user: "John Nicholson", text: "June 24 2021, 13:40 pm", proflink: "https://i.postimg.cc/cHg22LhR/profile-pic.png", postlink: "https://i.postimg.cc/tJ7QXz9x/feed-image-3.png", type: "post", posttext: "Like and share this video with friends" },
	{ id: 4, user: "John Nicholson", text: "June 24 2021, 13:40 pm", proflink: "https://i.postimg.cc/cHg22LhR/profile-pic.png", postlink: "https://i.postimg.cc/hjDRYBwM/feed-image-4.png", type: "post", posttext: "Like and share this video with friends" },
	{ id: 5, user: "John Nicholson", text: "June 24 2021, 13:40 pm", proflink: "https://i.postimg.cc/cHg22LhR/profile-pic.png", postlink: "https://i.postimg.cc/ZRwztQzm/feed-image-5.png", type: "post", posttext: "Like and share this video with friends" },
]
//Handling CORS exception
router.use(
	cors({
		origin: "*",
	})
)

/**
 * End-point to return posts to display in user's timeline
 */
router.get('/getposts', (req,res) =>{
	res.send(posts);
})

function validation(){
	return true
}

router.post('/addpost', (req,res) =>{
	if(validation()){
		post = req.body
		posts.push(post)
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