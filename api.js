// ivan start
// create function that states pulls id of city button, calls API to gather images and append to carousel
function displayImg() {
  // 1. pull ID of city to use in queryURL - need variable to contain ID - this is determine when city button is clicked
  var cityName = $(this).attr("id");
  console.log(cityName);

  // 2. update queryURL; inserting city name via variable
  var queryURL = "https://api.unsplash.com/photos/random?query=" + cityName +"&count=10&client_id=pFIWUHqX-OP7nX7XPXSeK2lpEddTVseWjHAQ0ct9mQI";
  // 3. call ajax method to send a request
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    // 4. receive response; with this we can pull image link to display onto page
    .then(function (response) {
      // Log the queryURL
      console.log(queryURL);
      // Log the resulting object
      console.log(response);

      // 5. for-loop to create tags for images and append to carousel
      for(var i = 0; i < 10; i++){
        // 6. create div tag that will contain img and append carousel-item classes
        var divImg = $("<div>").addClass("carousel-item");

        // 7. create img tag that will contain city img and append d-block w-100 classes
        var cityImg = $("<img>").addClass("d-block w-100");
        // add src and alt attributes - THIS IS WHERE THE MAGIC NEEDS TO HAPPEN
        console.log(response[i]);
        console.log(response[i].urls.regular);
        console.log(response[i].location.city);

        $(cityImg).attr("src", `${response[i].urls.regular}`);
        $(cityImg).attr("alt", `${response[i].location.city}`);
        // append cityImg to divImg
        $(divImg).append(cityImg);

        // 8. append divImg to carousel-inner class
        $(".carousel-inner").append(divImg);
      }
    });
}

// playing with event listener when a city button is clicked to display pics for that city in carousel - calling displayImg function
$("button").on("click", displayImg);
// ivan stop