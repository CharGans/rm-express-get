console.log("hello world");
//Axios lives on the client side
//It allows us to make requests to our server from our client

// button click
// We can make a request to the backend using a function

function getQuotes() {
  // Get quotes from the server using Axios
  // We are chaining axios methods here
  // First we reach out to the endpoint
  // Then we wait for a response, and we do something
  // .then handles the successful case, where we got data
  // .catch handles the failure case
  axios
    .get("/quotes")
    .then((response) => {
      console.log(
        "Got data from /quotes",
        // The actual data of the response lives in response.data
        response.data
      );
    })
    .catch((error) => {
      console.log(error);
      alert("Something went wrong!");
    });
  console.log("In getQuotes function");
}

getQuotes();
