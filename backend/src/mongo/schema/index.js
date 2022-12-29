const user_schema = require('./user')
// post
const post_schema = require('./post')
// event
const event_schema = require('./event')

const feature_schema = require('./feature')
const setting_schema = require('./setting')
const navicon_schema = require('./navicon')

const story_schema = require('./story')



module.exports = {
	user_schema,
	post_schema,
	event_schema, 
	feature_schema, 
	navicon_schema, 
	story_schema, 
	setting_schema
}