const mongoose = require('mongoose')
const { post_schema } = require('../schema')

//Creating post model from the post schema
const Post = mongoose.model("Post", post_schema) 

module.exports = {

	Post
}