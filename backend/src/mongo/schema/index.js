//protected schema
const user_schema = require('./user')
const post_schema = require('./post')
const event_schema = require('./event')
const story_schema = require('./story')

//default schema
const feature_schema = require('./feature')
const setting_schema = require('./setting')
const navicon_schema = require('./navicon')





module.exports = {
	user_schema,
	post_schema,
	event_schema, 
	feature_schema, 
	navicon_schema, 
	story_schema, 
	setting_schema
}