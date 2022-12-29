const mongoose = require('mongoose')
const { post_schema } = require('../schema')

const Post = mongoose.model("Post", post_schema) 

module.exports = {

	Post
}