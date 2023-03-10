// external dependencies
const mongoose = require('mongoose');
const { Schema } = mongoose;

//importing constant GENDERS from constants file
const { GENDERS } = require('../../constants');

//defining schema
const user_schema = new Schema({
	first_name: 		{ type: String, required: true },
	last_name: 			{ type: String, required: true },
	email:					{ type: String, required: true, unique: true },
	gender: 				{ type: String, required: true, enum: GENDERS }, 
	img_url:				{ type: String },
	join_date:			{ type: Date, default: Date.now },
	shortcut_list:  { type: [Object]}
});

module.exports = user_schema