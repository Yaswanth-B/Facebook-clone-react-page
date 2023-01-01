const mongoose = require('mongoose')
const { navicon_schema } = require('../schema')

//Creating an navicon model from the navicon schema
const NavIcon = mongoose.model("NavIcon", navicon_schema)

module.exports = {
	NavIcon
}