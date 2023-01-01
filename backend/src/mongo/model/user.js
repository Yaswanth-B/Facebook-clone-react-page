const mongoose = require('mongoose')
const { user_schema } = require('../schema')

//Creating an user model from the user schema
const User = mongoose.model("User", user_schema)

module.exports = {
	User
}