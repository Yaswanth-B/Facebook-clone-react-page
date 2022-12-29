// external dependencies
const mongoose = require('mongoose');
const { Schema } = mongoose;

const { GENDERS } = require('../../constants');

const user_schema = new Schema({
	first_name: 		{ type: String, required: true },
	last_name: 			{ type: String, required: true },
	email:					{ type: String, required: true, unique: true },
	gender: 				{ type: String, required: true, enum: GENDERS }, 
	img_url:				{ type: String },
	join_date:			{ type: Date, default: Date.now }
});

module.exports = user_schema