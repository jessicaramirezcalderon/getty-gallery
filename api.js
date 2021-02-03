//Check whether or not someone has already clicked for the first time
let alreadyLoaded = false;

//Foundation search bar
$(document).foundation();
$('.search').on('click', function (event) {
  $(".search-field").toggleClass("expand-search");
  // if the search field is expanded, focus on it
  if ($(".search-field").hasClass("expand-search")) {
    $(".search-field").focus();
  }
});

//grab the input data before using it
const cityInput = $("#city-input");

// create function that states pulls id of city button, calls API to gather images and append to carousel
function displayImg(e) {

  //stop search unless user presses the enter key. The Keycode for "enter" is the numer 13
  if (e.keyCode !== 13) {
    return;
  }

  // store the input info from line 23 as value to be passed in function below
  const cityName = cityInput.val();

  var apiKey = "c7cde66d595fb98577da25bd96a3df85";
  // query URL for city weather
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;

  // API call for city weather
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function (response) {
      //Insert onto the elements defined in loop below the images once the first load occurs
      if (alreadyLoaded) {
        $("img.d-block").each(function (i) {
          $(this).attr("src", response[i].urls.regular);
          $(this).attr("alt", response[i].location.city);

          console.log(response[i].urls);
        });

      }

  $.ajax({
    url: queryURL,
    method: "GET"
  })
    // Promise function
    .then(function (response) {
      console.log("unsplash url - " + queryURL);

      // for-loop to create tags for images and append to carousel
      for (var i = 0; i < response.length; i++) {
        //create div tag that will contain img and append carousel-item classes
        var divImg = $("<div>").addClass("carousel-item");
        divImg.attr("id", i);

        //create img tag that will contain city img and append d-block w-100 classes
        var cityImg = $("<img>").addClass("d-block w-100");
        $(cityImg).attr("src", `${response[i].urls.regular}`);
        $(cityImg).attr("alt", `${response[i].location.city}`);

        // append cityImg to divImg
        $(divImg).append(cityImg);
        // append divImg to carousel-inner class
        $(".carousel-inner").append(divImg);

        var firstImgTag = $("#0").addClass("active");
      }

    });
}

// user clicks Enter, function kicks off to get current weather and then city images
cityInput.on("keypress", currentWeatherAPI);


/*Added the functionality to load different images for each city. Added if and else statements for each state
Commented out some console logs
Feb 01 Added the search functionality and search bar. Also eliminated the on click event since we no longer need it.
Jessica
*/
