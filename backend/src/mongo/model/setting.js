const mongoose = require('mongoose')
const { setting_schema } = require('../schema')

const Setting = mongoose.model("Setting", setting_schema)

module.exports = {Setting}