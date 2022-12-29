const mongoose = require('mongoose')
const { navicon_schema } = require('../schema')

const NavIcon = mongoose.model("NavIcon", navicon_schema)


module.exports = {
	NavIcon
}