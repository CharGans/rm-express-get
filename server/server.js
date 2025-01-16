
const quotesRouter = require('./routers/quotes.router');

// Require express - gives us a function
const express = require("express");

//Not In use?
//this imports the quoteList to this file
let quoteList = require('./modules/quotes');

// Create an instance of express by calling the function returned above - gives us an object
const app = express();
const port = 5001;

// express static file serving - public is the folder name
app.use(express.static("server/public"));

app.use(express.json());

app.use('/quotes', quotesRouter)

// If we are POSTing data, we need to include this boilerplate
// JSON = JavaScript Object Notation
// Can look up Serialization, Deserialization for a deeper dive, not necessary


// Start up our server
app.listen(port, () => {
  console.log("listening on port", port);
});
// break code into small pieces 
// each peice handles a different responsibility
