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
var cityName = "";
var cityNameTag = $("<h3>");
var tempTag = $("<p>");
var humidityTag = $("<p>");
var windTag = $("<p>");
var currentWeather = $("#current-weather");

//Local storage
const storedSearch = localStorage.getItem("list");
const searchList = storedSearch ? JSON.parse(storedSearch) : []

// function for current weather API call
function currentWeatherAPI(e) {
  // stop search unless user presses the Enter key. The Keycode for "enter" is the numer 13 - thanks Jess!
  if (e.keyCode !== 13) {
    return;
  }

  // store the input info from cityInput as value to be passed in function below
  cityName = cityInput.val();
  console.log("city searched: " + cityName);

  // building out container for weather info
  currentWeather.addClass("current-weather");
  // assign cityName to h3 tag
  $(cityNameTag).text(cityName);
  // append h3 tag to page
  currentWeather.append(cityNameTag);

  var apiKey = "c7cde66d595fb98577da25bd96a3df85";
  // query URL for city weather
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;

  // API call for city weather
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function (response) {
      console.log("weather url - " + queryURL);
      // variable to get icon for todays weather
      var todayIcon = response.weather[0].icon;
      // assign value to todayIconURL
      var todayIconURL = "https://openweathermap.org/img/wn/" + todayIcon + ".png";
      // append todayIconURL next to cityNameTag
      $(cityNameTag).append("<img src =" + todayIconURL + ">");

      // create variables and assign weather info as text
      var tempF = Math.floor((response.main.temp - 273.15) * 1.8 + 32);
      $(tempTag).text("Temperature: " + tempF + "°F");
      var humidity = response.main.humidity
      $(humidityTag).text("Humidity: " + humidity + "%");
      var windSpeed = response.wind.speed;
      $(windTag).text("Wind Speed: " + windSpeed + " MPH");

      // append weaether info onto page
      $(currentWeather).append(tempTag, humidityTag, windTag);

      // call function to retrieve city images
      displayImg();
    });
}

// create function that pulls id of city button, calls API to gather images and append to carousel
function displayImg() {

  // clear div containing images
  $(".carousel-inner").empty();

  var apiKey = "duheouvYAukp2dG98jzVI1Y2VnHKe-PnTeWRmeKt5ss";
  // API Query call
  var queryURL = "https://api.unsplash.com/search/photos?query=" + cityName + "&count=10&orientation=landscape&client_id=" + apiKey;

  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function (response) {
      console.log("unsplash url - " + queryURL);

      // for-loop to create tags for images and append to carousel
      for (var i = 0; i < response.results.length; i++) {
        //create div tag that will contain img and append carousel-item classes
        var divImg = $("<div>").addClass("carousel-item");
        divImg.attr("id", i);

        //create img tag that will contain city img and append d-block w-100 classes
        var cityImg = $("<img>").addClass("d-block w-100");
        $(cityImg).attr("src", `${response.results[i].urls.regular}`);
        $(cityImg).attr("alt", cityName);

        // append cityImg to divImg
        $(divImg).append(cityImg);
        // append divImg to carousel-inner class
        $(".carousel-inner").append(divImg);

        var firstImgTag = $("#0").addClass("active");
      }

      //Push the input into local storage
      searchList.push(cityName);
      localStorage.setItem("list", JSON.stringify(searchList));
      const listGroup = $(".badge");

      //Limit number of stored items on the page to 9
      // {Malcolm} Increased the number of city inputs to a total of 10 so we can make it aesthetically match the search bar!
      if (listGroup.length > 9) {
        $(listGroup.get(9)).remove();
      }

      // {Malcolm} Deleted the bg light and background so we can add color to the pill
      $("#input-storage").prepend(`<button class="badge rounded-pill">${cityName}</button>`);
      searchList.reverse().slice(0, 5).forEach((citySearch) => {
        $("input-storage").append(`<button class="badge rounded-pill">${citySearch}</button>`);
      });

    });
}

// user clicks Enter, function kicks off to get current weather and then city images
cityInput.on("keypress", currentWeatherAPI);


/*Added the functionality to load different images for each city. Added if and else statements for each state
Commented out some console logs
Feb 01 Added the search functionality and search bar. Also eliminated the on click event since we no longer need it.
Jessica
*/