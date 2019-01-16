
var express = require('express');
var path = require('path');
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
const routes = require("./routes");
const api = require("./routes/api");
const PORT = process.env.PORT || 3001;

//Git Practice
// API Routes
var app = express();

// Download your OAuth2 configuration from the Google
// const keys = require('./oauth2.keys.json')

/**
 * Start by acquiring a pre-authenticated oAuth2 client.
//  */
// async function main() {
//   const oAuth2Client = await getAuthenticatedClient();
//   // Make a simple request to the Google Plus API using our pre-authenticated client. The `request()` method
//   // takes an AxiosRequestConfig object.  Visit https://github.com/axios/axios#request-config.
//   const url = 'https://www.googleapis.com/plus/v1/people?query=pizza';
//   const res = await oAuth2Client.request({url});
//   console.log(res.data);

//   // After acquiring an access_token, you may want to check on the audience, expiration,
//   // or original scopes requested.  You can do that with the `getTokenInfo` method.
//   const tokenInfo = await oAuth2Client.getTokenInfo(
//     oAuth2Client.credentials.access_token
//   );
//   console.log(tokenInfo);
// }

// /**
//  * Create a new OAuth2Client, and go through the OAuth2 content
//  * workflow.  Return the full client to the callback.
//  */
// function getAuthenticatedClient() {
//   return new Promise((resolve, reject) => {
//     // create an oAuth client to authorize the API call.  Secrets are kept in a `keys.json` file,
//     // which should be downloaded from the Google Developers Console.
//     const oAuth2Client = new OAuth2Client(
//       keys.web.client_id,
//       keys.web.client_secret,
//       keys.web.redirect_uris[0]
//     );



// main().catch(console.error);
// })
// }

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
})
  
