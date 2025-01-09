// Require express - gives us a function
const express = require("express");

// Create an instance of express by calling the function returned above - gives us an object
const app = express();
const port = 5001;

// express static file serving - public is the folder name
app.use(express.static("server/public"));

// Start up our server
app.listen(port, () => {
  console.log("listening on port", port);
});

// Objects use key-value pairs
let quoteList = [
  {
    text: "I'm not going to school just for the academics - I wanted to share ideas, to be around people who are passionate about learning.",
    author: "Emma Watson",
  },
  {
    text: "Remember there's no such thing as a small act of kindness. Every act creates a ripple with no logical end.",
    author: "Scott Adams",
  },
  {
    text: "Intelligence plus character-that is the goal of true education.",
    author: "Martin Luther King, Jr.",
  },
];

// We will create an endpoint to get these quotes back
// Routes
// Query endpoint

// The first argument to app.get is the name of the route

//Anonymous function
app.get("/quotes", (request, res) => {
  console.log("Get request to /quotes successful");

  // When you want data sent back from your server, use response.send
  // Res.send takes a payload - the thing you want to send back
  // res.send(quoteList)
  res.sendStatus(404);
});

// () => {}

// This is an API - Application Programming Interface

// HTTP Requests
// GET - read
// POST
