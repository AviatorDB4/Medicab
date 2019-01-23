
var express = require('express');
var session = require('express-session');
var bcrypt = require('bcrypt');
var path = require('path');
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
const routes = require("./routes");
const api = require("./routes/api");
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

//  if (req.body.email &&
//   req.body.username &&
//   req.body.password &&
//    req.body.passwordConf) {
//   var userData = {
//     email: req.body.email,
//     username: req.body.username,
//      password: req.body.password,
//      passwordConf: req.body.passwordConf,
//    }
//    //use schema.create to insert data into the db
//    User.create(userData, function (err, user) {
//      if (err) {
//        return next(err)
//      } else {
//        return res.redirect('/profile');
//      }
//    });
//  }
//  //use sessions for tracking logins
//  app.use(session({
//    secret: 'work hard',
//    resave: true,
//    saveUninitialized: false
//  }));
//  // catch 404 and forward to error handler
//  // GET /logout
//  router.get('/logout', function(req, res, next) {
//    if (req.session) {
//      // delete session object
//      req.session.destroy(function(err) {
//        if(err) {
//          return next(err);
//        } else {
//          return res.redirect('/');
//        }
//      });
//    }
//  });

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://root:password1@ds111025.mlab.com:11025/heroku_w0bjcxrs");

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
})
  
