// external dependencies
const mongoose = require('mongoose');
const { Schema } = mongoose;


//defining schema
const post_schema = new Schema({
	first_name: 			{ type: String, required: true },
	last_name: 				{ type: String, required: true },	
	post_text: 				{ type: String},
	post_img_link:    { type: String},
	liked_users:      {	type: [String]}, 
	disliked_users: 	{	type: [String]},
	relevant_users: 	{ type: [String], required: true },
	post_date:				{ type: Date, default: Date.now }
});

module.exports = post_schema