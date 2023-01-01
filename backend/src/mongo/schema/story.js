// external dependencies
const mongoose = require('mongoose');
const { Schema } = mongoose;


//defining schema
const story_schema = new Schema({
	story_text: 			{ type: String, required: true },
	story_img_link: 	{ type: String, required: true },	
	story_link: 			{ type: String, required:true},	
	relevant_users:   { type: [String], required:true},
	story_date:				{ type: Date, default: Date.now }
});

module.exports = story_schema