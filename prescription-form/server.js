
var express = require('express');
var path = require('path');
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
const routes = require("./routes");
const api = require("./routes/api")
const PORT = process.env.PORT || 3001;

//Git Practice
// API Routes
var app = express();


// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, 'build')));
}
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes)
app.use("/api", api);

// catch 404 and forward to error handler

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/medicab");

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
