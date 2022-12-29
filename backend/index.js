
const express = require('express');
const mongoose = require('mongoose')
const app =express();

// deprecated routes
app.use('/rightbar', require('./routes/rightbar/rightexp'))
app.use('/leftbar', require('./routes/leftbar/leftexp'))
app.use('/centrebar', require('./routes/centrebar/centreexp'))
app.use('/nav/settings', require('./routes/nav/settingsexp'))
app.use('/centrebar/storygallery', require('./routes/centrebar/storyexp'))
app.use('/nav', require('./routes/nav/navexp'))

// default routes
app.use('/default', require('./src/routes/default'))
// protected routes
app.use('/user', require('./src/routes/protected/user'))
app.use('/event', require('./src/routes/protected/event'))
app.use('/post', require('./src/routes/protected/post'))

const PORT = process.env.PORT || 5000

// mongodb+srv://yaswanth_b:Aspire1234@socialbook-cluster.f9iuryn.mongodb.net/test

const db_connection_promise = mongoose.connect('mongodb+srv://yaswanth_b:Aspire1234@socialbook-cluster.f9iuryn.mongodb.net/test')

db_connection_promise.then(
	() => {
		app.listen(PORT, () => console.log(`Server started on ${PORT}`))},
	() => {
		console.log("Connection fails")
	}
)

