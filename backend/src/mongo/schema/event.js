// external dependencies
const mongoose = require('mongoose');
const { Schema } = mongoose;

const event_schema = new Schema({
	event_name: 			{ type: String, required: true },
	location: 				{ type: String, required: true },	
	interested_users: { type: [String], required: true },
	event_date:				{ type: Date, default: Date.now }
});

module.exports = event_schema