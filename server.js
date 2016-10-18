/**
 * Created by Mortoni on 19/11/13.
 */
var config = require('./config.js');
var request = require('request');
var express = require('express');
var cors = require('cors');
var app = express();
var http = require('http').Server(app);
var firebase = require("firebase");


//=======================
// web server
//
var portNo = config.port;
var bodyParser = require("body-parser");
app.use(cors());
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());                         // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// web port
var PORT = process.env.PORT || config.port; 

//=======================
// read data
//
console.log("Polling rate: ", config.feed[config.feedNo].polltime, " seconds");
var myVar = setInterval(function(){ myTimer() },   config.feed[config.feedNo].polltime * 1000);
var url = config.feed[config.feedNo].url;

var dbconfig = {
    apiKey: "AIzaSyBkHlmyuJydTF-UMQoAEoexGjV6mr_Rz14",
    authDomain: "uselection-3482a.firebaseapp.com",
    databaseURL: "https://uselection-3482a.firebaseio.com",
    storageBucket: "uselection-3482a.appspot.com",
    messagingSenderId: "198557174469"
  };
  firebase.initializeApp(dbconfig);

var db = firebase.database();
var ref = db.ref("uselection");

//
//=======================
// Initialize the app.
//
    var server = app.listen(PORT, function () {
        console.log("App now running on port", PORT);
    });

function myTimer() {    
    request({
        url: url, //URL to hit
        qs: {from: 'feed example', time: + new Date()}, //Query string data
        method: 'GET', //Specify the method
        headers: { //We can define headers too
            'Content-Type': 'MyContentType',
            'Custom-Header': 'Custom Value'
        }
    }, function(error, response, body){
        // console.log("...returned", error);
        if(error) {
            console.log("Feed err: ", error);
        } else {
            if (response.statusCode !== 200) {
                console.log("Status code: ", response.statusCode);
            } else {
                var feed = JSON.parse(body);
                ref.set(feed);
                console.log("received data ");
            }
        }
    });
};
