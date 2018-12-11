/*
For axios (ajax requests):


    // Basic Node application for requesting data from the OMDB website via axios
    // Here we incorporate the "axios" npm package
    var axios = require("axios");

    // We then run the request with axios module on a URL with a JSON
    axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
    function(response) {
        // Then we print out the imdbRating
        console.log("The movie's rating is: " + response.data.imdbRating);
    }
    );



*/
require('dotenv').config();

const Spotify = require('node-spotify-api');
const request = require('request');
const axios = require('axios');
const fs = require('fs');
const keys = require('./keys');
const spotify = new Spotify(keys.spotify);


/* Needs to take the following commands:

concert-this
spotify-this-song
movie-this
do-what-it-says

*/

let userFun = process.argv[2];
// let userIn = process.argv[3];

if (userFun === 'concert-this') {
    concert_this();
} else if (userFun === 'spotify-this-song') {

} else if (userFun === 'movie-this') {
    
} else if (userFun === 'do-what-it-says') {

} else {
    // Asks user to use one of the allowed functions
}


/* node liri.js concert-this '<artist/band name here>'

Searches Bands in Town Artist Events API
"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

Shows in Terminal:
    * Name of Venue
    * Venue Location
    * Date of Event (using Moment to format as MM/DD/YYYY)

*/
function concert_this() {
    let artist = process.argv[3];

    axios.get('https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp')
    .then(data => {
        data = data[0];
        console.log('Venue: ' + data.datetime);
    })
    // response[0].datetime --> '2017-03-19T11:00:00'
    // response[0].venue.name --> venue name string
    // response[0].venue.city --> city name string
    // response[0].venue.region --> state name string
}

/* node liri.js spotify-this-song '<song name here>'

Shows in Terminal:
    * Artist(s)
    * Song's name
    * Preview link of the song from Spotify
    * Album that the song is on

Defaults to 'The Sign' by Ace of Base if no song is given
*/
function spotify_this_song() {

}

/* node liri.js movie-this '<movie name here>'

Shows in Terminal:
    * Title of the movie.
    * Year the movie came out.
    * IMDB Rating of the movie.
    * Rotten Tomatoes Rating of the movie.
    * Country where the movie was produced.
    * Language of the movie.
    * Plot of the movie.
    * Actors in the movie.

Defaults to "Mr. Nobody" if no movie is given
use 'trilogy' API Key
*/
function movie_this() {

}

/* node liri.js do-what-it-says

Uses 'fs' node package, takes text from random.txt and uses it to call a LIRI command

-- edit random.txt to test for movie-this and concert-this

*/
function do_what_it_says() {

}

/* BONUS
Log everything to both Terminal and log.txt
Append each command
Don't overwrite the file each time a command is run
*/





































