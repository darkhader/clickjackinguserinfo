const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const session = require('express-session')
const userRouter = require('./routers/userRouter');

mongoose.connect(
	
	"mongodb://darkhader:Hoanghiep98@ds257698.mlab.com:57698/clickjackingdb"
, { useNewUrlParser: true }, (err) => {
    if (err) console.log(err)
    else console.log("Success")

});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));



app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/index.html');
});
app.get('/sandbox', (req, res) => {
	res.sendFile(__dirname + '/public/sandbox.html');
});
app.use(session({
	secret:"keybroadhero",
	resave:false,
	saveUninitialized:false,
	cookie:{
		secure:false,
		httpOnly:false,
		maxAge:7*24*60*60*1000
	}
}))
app.use("/api/users", userRouter);
const port = process.env.PORT || 4000;
app.listen(port, (err) => {
	if (err) console.log("err 2 la",err)
	else console.log('Server is listening at port ',port);
});