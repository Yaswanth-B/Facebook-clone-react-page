//importing all required models
const { User } = require('./user')
const { Post } = require('./post')
const { Event } = require('./event')
const { Setting } = require('./setting')
const { NavIcon } = require('./navicon')
const { Feature } = require('./feature')
const { Story } = require('./story')

//exporting all models
module.exports = {
	User, Post, Event, NavIcon, Feature, Story, Setting
}