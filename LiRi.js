
// 1. Make a JavaScript file named liri.js.
// 2. At the top of the liri.js file, add code to read and set any environment variables with the dotenv package:
// 1. Add the code required to import the keys.js file and store it in a variable.
// You should then be able to access your keys information like so
//   var spotify = new Spotify(keys.spotify);
//   var client = new Twitter(keys.twitter);
// 1. Make it so liri.js can take in one of the following commands:
// * `my-tweets`
// * `spotify-this-song`
// * `movie-this`
// * `do-what-it-says`
// var request = require("dotenv").config();

var request = require("request");

var action = process.argv[2];
var userInput = process.argv;

// var spotify = new Spotify(keys.spotify);
// var client = new Twitter(keys.twitter);





if (action === 'movie-this') {
    movieThis();
}
else if (action === 'spotify-this-song') {
    // spotifyThis();
}
else if (action === 'my-tweets') {
    
}
else if (action === 'do-what-it-says') {
    
}






function movieThis() {
    // Include the request npm package (Don't forget to run "npm install request" in this folder first!)
    // Grab or assemble the movie name and store it in a variable called "movieName"
    var movieName = "";

    for (var i = 3; i < userInput.length; i++) {

        if (i > 3 && userInput.length) {
            movieName = movieName + "+" + userInput[i];
        }
        else {
            movieName += userInput[i];
        }
    }

    // Then run a request to the OMDB API with the movie specified
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    // This line is just to help us debug against the actual URL.
    console.log(queryUrl);

    // Then create a request to the queryUrl
    request(queryUrl, function (error, response, body) {

        // If the request is successful
        if (!error && response.statusCode === 200) {

            // Then log the Release Year for the movie
            console.log("Movie Title: " + JSON.parse(body).Title);
            console.log("Release year: " + JSON.parse(body).Year);
            console.log("Rating: " + JSON.parse(body).Rated);
            console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
            console.log("Country: " + JSON.parse(body).Country);
            console.log("Language: " + JSON.parse(body).Language);
            console.log("Plot: " + JSON.parse(body).Plot);
            console.log("Actors: " + JSON.parse(body).Actors);
        }
    });
}