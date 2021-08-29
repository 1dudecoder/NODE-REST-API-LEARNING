const express = require("express");
const router = require("./route/api")
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

//setup express app
const app = express();

//creating db is not available then it is going to create
mongoose.connect('mongodb://localhost/nitingo');

//yhn pr hum apne promise ko change krre hai mongoose.promise k sth
mongoose.Promise = global.Promise;

//middleware which code run btw client request and and server response 
//before data getting from the post request you have to parse it from bodyparser
// and body parser.type can be json or text  file //here we are adding the data to our route
//and body parser is a middleware
app.use(bodyParser.json());

//now using use functon we can use routes to your index file
app.use(router);

// // if agr huare url k agye bhi koi path rehega to use esse add krte hai
// app.use('/api',router);
// or //app.use('/api',require("./route/api"))

// error handling middle ware
app.use(function(err,req,res,next){
    res.status(442).send({ error : err.message});    //status is error code 
})              //if any error happen move to this middle ware



//listen  for request
app.listen(process.env.port || 5000, function(){
    console.log("express is working")
})

