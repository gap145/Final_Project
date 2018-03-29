const express = require('express');
const bodyParser = require('body-parser');
const app = express();

let shopCart = []

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use(bodyParser.json())

app.listen(8080, () => {
	console.log('Server Started on http://localhost:8080');
	console.log('Press CTRL + C to stop server');
});

// //Routes

// app.get('/Jeopardy', (req, res) => {
// 	res.send()
// 	console.log("Right")
// })

// app.post('/Jeopardy', (req, res) => {
// 	res.send()	
// 	console.log("Right")
// })