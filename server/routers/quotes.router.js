// HTTP Request types include
// GET - Read data
// POST - Create data

//we need to add boilerplate to get the plumbing working 
const express = require('express');
const router = express.Router();

//this imports the quoteList to this file
let quoteList = require('../modules/quotes');

// We will create an endpoint to get these quotes back
// Endpoints are also called routes
// Sometimes we say we "query" the endpoint, or "hit" it to get data

// The first argument to app.get is the name of the route
// The second is an anonymous function
// Arrow function syntax is () => {}, params can go inside ()

//we dont need this when using a router file
//you only need more than a / in the route if its the first route
    router.get("/", (req, res) => {
    console.log(
      "GET request to /quotes successful"
    );
  
    // When you want data sent back from your server, use res.send
    // res.send takes a payload - the thing you want to send back
    res.send(quoteList);
    // Could also choose to send back an HTTP status - 200 is default
    // res.sendStatus(404);
    });
  
  router.post("/", (req, res) => {
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
  
//we use req.perams to get access to data living in our route
  // '/:id' means a specific id of an item we want to delete and thing after the / after quotes
  router.delete ("/:id",  (req, res) => {
    console.log('DELETE request successfull');
    //req.params is always a string
    //so convert is to a num using Number()
      let id = Number(req.params.id);
    console.log('req.perams is', id);

    // now delete a quotes based on the id
function deleteQuotes(quote, i) {

if (i === (id)) {
  return false
}
return true
}
    quoteList = quoteList.filter(deleteQuotes);
    res.sendStatus(204);
  });
  // You've just built an API - Application Programming Interface.
  // It is a way for two pieces of software to interact with each other

  //dont forget to export
  module.exports = router;
