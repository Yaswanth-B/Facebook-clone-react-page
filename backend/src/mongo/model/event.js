const mongoose = require('mongoose')
const { event_schema } = require('../schema')

//Creating an event model from the event schema
const Event = mongoose.model("Event", event_schema)


module.exports = {
	Event
}