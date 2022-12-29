const mongoose = require('mongoose')
const { event_schema } = require('../schema')

const Event = mongoose.model("Event", event_schema)


module.exports = {
	Event
}