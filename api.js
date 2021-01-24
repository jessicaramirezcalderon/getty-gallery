



    // API url. This example uses Paris as query term but this will later be a variable storing the city array items. This returns 10 results
    var queryURL = "https://api.unsplash.com/photos/random?query=paris&count=10&client_id=pFIWUHqX-OP7nX7XPXSeK2lpEddTVseWjHAQ0ct9mQI";

    // Here we run our AJAX call to the Unsplash API
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      // We store all of the retrieved data inside of an object called "response"
      .then(function(response) {

        // Log the queryURL
        console.log(queryURL);

        // Log the resulting object
        console.log(response);

      });