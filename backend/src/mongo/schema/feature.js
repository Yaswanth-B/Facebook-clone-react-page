const mongoose = require('mongoose');
const { Schema } = mongoose;


//defining schema
const feature_schema = new Schema({
	feature_name: 			{ type: String, required: true },
	feature_image: 			{ type: String, required: true },
	feature_link: 			{ type: String, required: true }
});

module.exports = feature_schema