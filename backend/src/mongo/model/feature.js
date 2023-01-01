const mongoose = require('mongoose')
const { feature_schema } = require('../schema')

//Creating a feature model from the feature schema
const Feature = mongoose.model("Feature", feature_schema)

module.exports = {
	Feature
}