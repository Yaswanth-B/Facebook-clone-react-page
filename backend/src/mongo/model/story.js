const mongoose = require('mongoose')
const { story_schema } = require('../schema')

//Creating story model from the story schema
const Story = mongoose.model("Story", story_schema) 

module.exports = {
	Story
}