
const express = require('express');
//const path = require('path');

//const logger = require('./middleware/Logger')
const app =express();
// app.get('/', (req,res) =>{
// 	res.send('<h1>Hey</h1>');
// })

//Gets all members


// app.use(express.static(path.join(__dirname, 'public')));
//app.use(logger)
app.use('/rightbar', require('./routes/rightbar/rightexp'))
app.use('/leftbar', require('./routes/leftbar/leftexp'))
app.use('/centrebar', require('./routes/centrebar/centreexp'))
app.use('/nav/settings', require('./routes/nav/settingsexp'))
app.use('/centrebar/storygallery', require('./routes/centrebar/storyexp'))
app.use('/nav', require('./routes/nav/navexp'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on ${PORT}`))
