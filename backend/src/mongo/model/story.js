const mongoose = require('mongoose')
const { story_schema } = require('../schema')

const Story = mongoose.model("Story", story_schema) 

module.exports = {
	Story
}