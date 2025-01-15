// Require express - gives us a function
const express = require("express");

// Create an instance of express by calling the function returned above - gives us an object
const app = express();
const port = 5001;

// express static file serving - public is the folder name
app.use(express.static("server/public"));

// If we are POSTing data, we need to include this boilerplate
// JSON = JavaScript Object Notation
// Can look up Serialization, Deserialization for a deeper dive, not necessary
app.use(express.json());

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

// HTTP Request types include
// GET - Read data
// POST - Create data

// We will create an endpoint to get these quotes back
// Endpoints are also called routes
// Sometimes we say we "query" the endpoint, or "hit" it to get data

// The first argument to app.get is the name of the route
// The second is an anonymous function
// Arrow function syntax is () => {}, params can go inside ()
app.get("/quotes", (req, res) => {
  console.log(
    "GET request to /quotes successful"
  );

  // When you want data sent back from your server, use res.send
  // res.send takes a payload - the thing you want to send back
  res.send(quoteList);
  // Could also choose to send back an HTTP status - 200 is default
  // res.sendStatus(404);
});

app.post("/quotes", (req, res) => {
  console.log("POST to /quotes success! Body: ", req.body);
  // req.body is the data sent in the request lives
  let quote = req.body;
  // We have a quoteList that lives on the backend
  // Take the req.body and save it in the array
  console.log("Adding new quote:", quote);
  quoteList.push(quote);
  console.log("New array is:", quoteList);
  res.sendStatus(201);
});

// You've just built an API - Application Programming Interface.
// It is a way for two pieces of software to interact with each other
