
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


// protected routes
app.use('/user', require('./src/routes/protected/user'))
app.use('/event', require('./src/routes/protected/event'))
app.use('/post', require('./src/routes/protected/post'))
app.use('/story', require('./src/routes/protected/story'))

//default routes
app.use('/navicon', require('./src/routes/default/navicon'))
app.use('/feature', require('./src/routes/default/feature'))
app.use('/setting', require('./src/routes/default/setting'))

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

