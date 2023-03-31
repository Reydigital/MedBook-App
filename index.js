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

app.get("/booking", function (req, res) {
    res.sendFile(__dirname + "/booking.html");
});

app.get("/search", function (req, res) {
    res.sendFile(__dirname + "/search.html");
});

app.get("/success", function (req, res) {
    res.sendFile(__dirname + "/success.html");
});

//Collecting user signup info
app.get("/signup", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
});


app.get("/verify", function (req, res) {
    res.sendFile(__dirname + "/verify.html");
});

app.get("/checkemail", function (req, res) {
    res.sendFile(__dirname + "/checkemail.html");
});


// verify user
app.post('/signup', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${password}`);

    res.redirect('/verify');
});


app.post('/verify', (req, res) => {
    const userType = req.body.usertype;

    console.log(`User Type: ${userType}`);

    res.redirect('/checkemail');
});


app.post('/checkemail', (req, res) => {

    res.redirect('/');
});


app.post('/success', (req, res) => {


    res.redirect('/patientdashboard');
});
// accessing patient dashboard

app.post('/', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${password}`);

    res.redirect('/patientdashboard');
});


//Accessing doctor dashboard
app.get("/doctordashboard", function (req, res) {
    res.sendFile(__dirname + "/doctorDashboard.html");
});

app.listen(3000, function (req, res) {
    console.log("Server is running on port 3000");
});