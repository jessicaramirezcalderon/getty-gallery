<<<<<<< HEAD
$(document).foundation();
$(function () {
  alert('Foundation Core Version: ' + Foundation.version);
  $('.search')
    .bind('click', function (event) {
      $(".search-field").toggleClass("expand-search");

      // if the search field is expanded, focus on it
      if ($(".search-field").hasClass("expand-search")) {
        $(".search-field").focus();
      }
    })
});

$(document).foundation({
  alert('Foundation DropDown Version:' + Foundation.libs.orbit.version);
  orbit: {
    animation: 'slide',
    timer_speed: 1000,
    pause_on_hover: true,
    animation_speed: 500,
    navigation_arrows: true,
    bullets: false
  }
});




=======
>>>>>>> origin/jrc
//Check whether or not someone has already clicked for the first time
let alreadyLoaded = false;




//Foundation search bar
$(document).foundation();
$('.search')
  .on('click', function (event) {
    $(".search-field").toggleClass("expand-search");

    // if the search field is expanded, focus on it
    if ($(".search-field").hasClass("expand-search")) {
      $(".search-field").focus();
    }
  })




//grab the input data before using it
const cityInput = $("#city-input");

// create function that states pulls id of city button, calls API to gather images and append to carousel
<<<<<<< HEAD
function displayImg() {

  // pull ID of city to use in queryURL - need variable to contain ID - this is determine when city button is clicked
  var cityName = $(this).attr("id");
  console.log(cityName);

  // update queryURL; inserting city name via variable
  var queryURL = "https://api.unsplash.com/photos/random?query=" + cityName + "&count=10&client_id=V3iL4jHxM2p-IjPs13Jjt_v8QdU7RsoO6ZyZQjymdSU";
  // ajax method to send api request
=======
function displayImg(e) {

  //stop search unless user presses the enter key. The Keycode for "enter" is the numer 13
  if (e.keyCode !== 13) {
    return;
  }

  // store the input info from line 23 as value to be passed in function below
  const cityName = cityInput.val();

  // API Query call
  const queryURL = "https://api.unsplash.com/photos/random?query=breakfast+" + cityName + "&count=10&orientation=landscape&client_id=V3iL4jHxM2p-IjPs13Jjt_v8QdU7RsoO6ZyZQjymdSU";

>>>>>>> origin/jrc
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    // Promise function
    .then(function (response) {
<<<<<<< HEAD
      // Log the queryURL
      console.log(queryURL);
      console.log(response);

      //Assign the different locations for each loop.
      // if (alreadyLoaded) {
      //   $("img").each(function (i) {
      //     $(this).attr("src", response[i].urls.regular);
      //     $(this).attr("alt", response[i].location.city);
      //   });
      // }

      // else {
        //for-loop to create tags for images and append to carousel
        // for (var i = 0; i < 10; i++) {
        //   //create div tag that will contain img and append carousel-item classes
        //   var divImg = $("<div>").addClass("carousel-item");
=======
   
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
>>>>>>> origin/jrc

        //   //create img tag that will contain city img and append d-block w-100 classes
        //   var cityImg = $("<img>").addClass("d-block w-100");
        //   // add src and alt attributes - THIS IS WHERE THE MAGIC NEEDS TO HAPPEN
        //   //console.log(response[i]); console.log(response[i].urls.regular); console.log(response[i].location.city);


        //   $(cityImg).attr("src", `${response[i].urls.regular}`);
        //   $(cityImg).attr("alt", `${response[i].location.city}`);
        //   // append cityImg to divImg
        //   $(divImg).append(cityImg);

        //   // append divImg to carousel-inner class
        //   $(".orbit-inner").append(divImg);

        //   alreadyLoaded = true;
        // }
      // }

      renderImg(response);

    });
}

function renderImg(imgList) {

  var container = $(".orbit-container").empty();

  for (var i = 0; i < imgList.length; i++) {
    var listTag = $("<li>").addClass("orbit-slide");
    if(i === 0){
      listTag.addClass("is-active");
    }

    var figureTag = $("<figure>").addClass("orbit-figure");
    var cityImg = $("<img>").addClass("orbit-image");

    $(cityImg).attr("src", `${imgList[i].urls.regular}`);
    $(cityImg).attr("alt", `${imgList[i].location.city}`);

    $(figureTag).append(cityImg);
    // append cityImg to divImg
    $(listTag).append(figureTag);
    // append divImg to carousel-inner class
    $(container).append(listTag);

    alreadyLoaded = true;
  }
}

// playing with event listener when a city button is clicked to display pics for that city in carousel - calling displayImg function
<<<<<<< HEAD
$(".city-button").on("click", displayImg);
=======
//Removed the on click event since we're now asking people to search instead of clicking a button
//$("button").on("click", displayImg);
>>>>>>> origin/jrc

cityInput.on("keypress", displayImg);

<<<<<<< HEAD
=======

>>>>>>> origin/jrc
/*Appended the images and corresponding attributes to the carousel using a for loop
Ivan
*/

/*Added the functionality to load different images for each city. Added if and else statements for each state
Commented out some console logs

Feb 01 Added the search functionality and search bar. Also eliminated the on click event since we no longer need it.
Jessica
*/
