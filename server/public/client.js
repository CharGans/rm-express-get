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

function addQuote(event) {
  event.preventDefault();

  // We access an input field's input via its value property
  let quote = document.querySelector("#quoteContent").value;
  let author = document.querySelector("#authorContent").value;
  console.log("Inputs:", quote, author);

  // Bundle up inputs into an object
  let quoteToAdd = {
    text: quote,
    author: author,
  };

  axios
    .post("/quotes", quoteToAdd)
    .then((response) => {
      console.log("Successful POST to /quotes");

      //Clear out the input fields
      document.querySelector("#quoteContent").value = "";
      document.querySelector("#authorContent").value = "";

      // Get the quotes from the server again!
      getQuotes();
    })
    .catch((error) => {
      console.log("Error in POST to /quotes", error);
    });
}

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
