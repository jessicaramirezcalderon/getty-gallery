# getty-gallery

# github-Repo

https://github.com/jessicaramirezcalderon/getty-gallery

# github-Live-Server

https://jessicaramirezcalderon.github.io/getty-gallery/

# google slides

https://docs.google.com/presentation/d/1kIMXsyqWEUno-4PXRPlKT0GRlRPxS1rxyJq3gSon3JQ/edit

![alt text]()

For the HTML files we used foundation, bootstrap, and font awesome CDN stylesheets. In the Nav we are using a serach bar using foundation. The main container that houses the input store, the current weather information as werll as the carousel. The next section shows the buttons for the carousel so that the end user can scroll left or right. The following section shows the image gallery that is being pulled in from unsplash. At the bottom of the page we have the scripts are used from jquery, founction, bootstrap and lastly the api.js that we have created. 


We used two JS files. The api.js, that was used for the weather. And the giphy.js for the giphs. Under the apis.js, we are using two apis's. One to pull in the weather and one to pull in the images. An event listener was setup targeting the search field class and it setup to toggle from open to close when the magnifying glass is clicked. 

The next section contains the variable to show the various city inputs and names as well as temperature, humidity, wind, current weather and weather tags. The next section has the variables for the apiKey and the queryUrl. Then we run out ajax call to pull in weather from server. The following section has the variables that are used to show the search results onto the web page. Then we append the currentweather function to the weatherTag and call displayIMG and createGif functions. The following section shows the code for the displayIMG function. Which starts with the ID img-gallery empty. Two variable are setup for the api key and the queryURL. The ajax call is then run to get the data from unsplash. The server responses are then shows on the page using the cityIMG and divIMG variables and the storeData function is called. On the next section the createGif function is shown. There is apiKey variable followed by a for loop. The server responses are shown onto the page via the gifGallery and weatherGif variables. The next section shows the storeData function which uses local storage to save searchList info in the cityName variable. The amount of store items is limited to four. 

For the giphy.js a function is setup to target the class of search. The next section shows the variable that were created for house data for the cityName, currentWeather, temperature, windSpeed, weatherKeys, and gifURLs. The next section will show the getWeather function that has two variables for the apiKey and the queryURL. Then the ajax call is made. And the responses are shown on the page using variables listed. The the getGifKeys function is called. The next section shows the getGifKeys function that has two variables for the apikey and the queryURL then the ajax call is made. A for loop is then run to retrieve the key terms. The next section shows the createGif function house one variable for the apiKey. A for loop is then run and then the ajax call is made with the responses shown onto the page showing the gifGAllery, weatherGif variables.  The last section shows an event listener targeting the class of search with a conditional statement. 

