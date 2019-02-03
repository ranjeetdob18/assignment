const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('./_helpers/error-handler');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// all routes will pass through
app.use('/users', require('./users/users.controller'));
app.use('/hotels', require('./hotels/hotel.controller'));
app.use('/rooms', require('./rooms/room.controller'));

// if no any route matches then show "No such request"
app.all('*',function(req,res,next){
	return res.json({ message: "No such request" });
});

// global error handler
app.use(errorHandler);

// start server
const port = 8000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});

module.exports = server