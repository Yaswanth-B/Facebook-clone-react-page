const mongoose = require('mongoose');
const { Schema } = mongoose;


//defining schema
const navicon_schema = new Schema({
	navicon_image: 				{ type: String, required: true },
	navicon_link:					{ type: String, required: true }
});

module.exports = navicon_schema