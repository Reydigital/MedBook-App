const express = require('express');
const request = require('request');
const https = require('https');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function (req, res) {
    res.sendFile(__dirname + "/login.html");
});

app.get("/patientdashboard", function (req, res) {
    res.sendFile(__dirname + "/patientDashboard.html");
});

app.get("/success", function (req, res) {
    res.sendFile(__dirname + "/success.html");
});

//Collecting user signup info
app.get("/signup", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
});


app.post('/signup', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);

    res.redirect('/success');
});

app.post('/', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);

    res.redirect('/success');
});

//Accessing doctor dashboard
app.get("/doctordashboard", function (req, res) {
    res.sendFile(__dirname + "/doctorDashboard.html");
});

app.listen(3000, function (req, res) {
    console.log("Server is running on port 3000");
});