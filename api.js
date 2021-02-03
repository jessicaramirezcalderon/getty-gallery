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
function displayImg(e) {

  //stop search unless user presses the enter key. The Keycode for "enter" is the numer 13
  if (e.keyCode !== 13) {
    return;
  }

  // store the input info from line 23 as value to be passed in function below
  const cityName = cityInput.val();

  // API Query call
  const queryURL = "https://api.unsplash.com/photos/random?query=breakfast+" + cityName + "&count=10&orientation=landscape&client_id=V3iL4jHxM2p-IjPs13Jjt_v8QdU7RsoO6ZyZQjymdSU";

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

          alreadyLoaded = true;
        }
      }

    });
}

// playing with event listener when a city button is clicked to display pics for that city in carousel - calling displayImg function
//Removed the on click event since we're now asking people to search instead of clicking a button
//$("button").on("click", displayImg);

cityInput.on("keypress", displayImg);


/*Appended the images and corresponding attributes to the carousel using a for loop
Ivan
*/

/*Added the functionality to load different images for each city. Added if and else statements for each state
Commented out some console logs
Feb 01 Added the search functionality and search bar. Also eliminated the on click event since we no longer need it.
Jessica
*/