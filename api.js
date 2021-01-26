// ivan start
// create function that states what occurs when a city button is clicked
function displayImg() {
  // 1. pull ID of city to use in queryURL - need variable to contain ID - this is determine when city button is clicked
  var cityName = $(this).attr("id");
  console.log(cityName);

  // 2. update queryURL; inserting city name via variable
  var queryURL = "https://api.unsplash.com/search/collections?page=1&query=" + cityName + "&client_id=pFIWUHqX-OP7nX7XPXSeK2lpEddTVseWjHAQ0ct9mQI";

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

      // 5. create div tag that will contain img and append carousel-item classes
      var divImg = $("<div>").addClass("carousel-item");

      // 6. create img tag that will contain city img and append d-block w-100 classes
      var cityImg = $("<img>").addClass("d-block w-100");
      // add src and alt attributes - THIS IS WHERE THE MAGIC NEEDS TO HAPPEN
      console.log(response.results[0]);
      console.log(response.results[0].title);
      console.log(response.results[0].cover_photo.urls.regular);

      $(cityImg).attr("src", `${response.results[0].cover_photo.urls.regular}`);
      $(cityImg).attr("alt", `${response.results[0].title}`);
      // append cityImg to divImg
      $(divImg).append(cityImg);

      // 7. append divImg to carousel-inner class
      $(".carousel-inner").append(divImg);
    });
}

// playing with event listener when a city button is clicked to display pics for that city in carousel - calling displayImg function
$("button").on("click", displayImg);
// ivan stop