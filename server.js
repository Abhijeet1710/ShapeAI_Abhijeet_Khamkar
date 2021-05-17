const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const port = 3000;
app.use(bodyparser.urlencoded({extended: true}));

app.get('/', function(req, res) {
	res.sendFile(__dirname+"/index.html");
});

app.post('/', function(req, res) {
	const weight = Number(req.body.weight);
	const height = Number(req.body.height);

	const BMI = (weight/(height*height)).toFixed(2);

  	res.send(`<h1>Body Mass Index : ${BMI} </h1>`);
});


app.listen(port, function(req, res) {
  console.log(` Server Running at http://localhost:${port}`)
})