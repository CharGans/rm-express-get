console.log("hello world");

// We can make a request to the backend using a function
function getQuotes() {
  console.log("In getQuotes function");
  // Get quotes from the server using Axios
  // Axios lives on the client side
  // We are chaining axios methods here
  axios
    // First we reach out to the endpoint
    .get("/quotes")
    // Then we wait for a response, and we do something
    // .then handles the successful case, where we got data
    .then((response) => {
      console.log(
        "Got data from /quotes",
        // The actual data of the response lives in response.data!!!
        response.data
      );
      let quotes = response.data;
      // Pass the quotes to our render (display) function
      renderToDOM(quotes);
    })
    // .catch handles the failure case
    .catch((error) => {
      console.log(error);
      alert("Something went wrong!");
    });
}

// Call the function to get the quotes
getQuotes();

// Function to actually display quotes on DOM
function renderToDOM(quotes) {
  console.log("In renderToDOM");
  // Select the content div
  let contentDiv =
    document.querySelector("#content");
  // Make sure the content is empty initially
  contentDiv.innerHTML = "";
  // Loop through each quote in the quotes array
  for (let quote of quotes) {
    // Add each quote to the innerHTML using raw HTML, adding on top of the previous ones
    contentDiv.innerHTML += `
        <p>"${quote.text}" -${quote.author}</p>
        `;
  }
}
