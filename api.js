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
var cityInput = $("#city-input");
var cityNameTag = $("<h3>");
var currentWeather = $("#current-weather");



// create function that states pulls id of city button, calls API to gather images and append to carousel
function displayImg(e) {

  //stop search unless user presses the enter key. The Keycode for "enter" is the number 13
  if (e.keyCode !== 13) {
    return;
  }

  // store the input info from cityInput as value to be passed in function below
  cityInput = cityInput.val();
  console.log(cityInput);

  // API Query call
  const queryURL = "https://api.unsplash.com/photos/random?query=breakfast+" + cityInput + "&count=10&orientation=landscape&client_id=V3iL4jHxM2p-IjPs13Jjt_v8QdU7RsoO6ZyZQjymdSU";

  $.ajax({
    url: queryURL,
    method: "GET"
  })
    // Promise function
    .then(function (response) {

      //Insert onto the elements defined in loop below the images once the first load occurs
      if (alreadyLoaded) {
        $("img.d-block").each(function (i) {
          $(this).attr("src", response[i].urls.regular);
          $(this).attr("alt", response[i].location.city);
          console.log(response[i].urls);
        });

      }

      else {
        //for-loop to create tags for images and append to carousel
        for (var i = 0; i < 10; i++) {
          //create div tag that will contain img and append carousel-item classes
          var divImg = $("<div>").addClass("carousel-item");
          //create img tag that will contain city img and append d-block w-100 classes
          var cityImg = $("<img>").addClass("d-block w-100");

          $(cityImg).attr("src", `${response[i].urls.regular}`);
          $(cityImg).attr("alt", `${response[i].location.city}`);

          // append cityImg to divImg
          $(divImg).append(cityImg);
          // append divImg to carousel-inner class
          $(".carousel-inner").append(divImg);
        }
        alreadyLoaded = true;
      }
      // get the current weather for city
      currentWeatherAPI();
    });
}

// function for current weather API call
function currentWeatherAPI() {
  console.log("currentWeatherAPI function");
  console.log("uvIndexAPI function");

  var apiKey = "c7cde66d595fb98577da25bd96a3df85";

  // add border and spacing for currentWeather div tag
  currentWeather.addClass("current-weather");

  // assign cityName to h3 tag
  $(cityNameTag).text(cityInput);
  // append h3 tag to currentWeather div tag
  currentWeather.append(cityNameTag);

  // query URL for city weather
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=" + apiKey;

  // API call for city weather
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function (response) {
      // variable to get icon for todays weather
      var todayIcon = response.weather[0].icon;
      // assign value to todayIconURL
      var todayIconURL = "https://openweathermap.org/img/wn/" + todayIcon + ".png";
      // append todayIconURL next to cityNameTag
      $(cityNameTag).append("<img src =" + todayIconURL + ">");

      // variable to get temp in F
      var f = Math.floor((response.main.temp - 273.15) * 1.8 + 32);
      // append temp to currentWeather
      $(currentWeather).append("Temperature: " + f + "&deg; F <br>");

      // variable to contain humidity and wind speed
      var humidity = "Humidity: " + response.main.humidity + "%";
      var windSpeed = "Wind Speed: " + response.wind.speed + " MPH";
      // append humidity and wind speed to currentWeather
      $(currentWeather).append(humidity + "<br>" + windSpeed + "<br>");
    });
}


// user clicks Enter, function kicks off to get pics
cityInput.on("keypress", displayImg);

/*Added the functionality to load different images for each city. Added if and else statements for each state
Commented out some console logs

Feb 01 Added the search functionality and search bar. Also eliminated the on click event since we no longer need it.
Jessica
*/