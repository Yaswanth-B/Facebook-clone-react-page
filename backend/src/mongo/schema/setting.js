const mongoose = require('mongoose');
const { Schema } = mongoose;

const setting_schema = new Schema({
	setting_image: 				{ type: String, required: true },
	setting_link:					{ type: String, required: true }, 
	setting_text: 				{type:String, required:true}
});

module.exports = setting_schema