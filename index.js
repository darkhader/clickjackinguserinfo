const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();




app.use(bodyParser.urlencoded({ extended: false }));



app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/index.html');
});
app.get('/sandbox', (req, res) => {
	res.sendFile(__dirname + '/public/sandbox.html');
});




app.use(express.static('public'));
app.listen(4000, (err) => {
	if (err) console.log("err 2 la",err)
	else console.log('Server is listening at port 4000');
});