const mongoose = require('mongoose')
const { setting_schema } = require('../schema')

//Creating setting model from the setting schema
const Setting = mongoose.model("Setting", setting_schema)

module.exports = {Setting}