const mongoose = require('mongoose')
const { feature_schema } = require('../schema')

const Feature = mongoose.model("Feature", feature_schema)


module.exports = {
	Feature
}