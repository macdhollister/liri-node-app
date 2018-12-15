require('dotenv').config();

const Spotify = require('node-spotify-api');
const request = require('request');
const axios = require('axios');
const fs = require('fs');
const keys = require('./keys');
const spotify = new Spotify(keys.spotify);

let userFun = process.argv[2];
// let userIn = process.argv[3];

if (userFun === 'concert-this') {
    concert_this(process.argv[3]);
} else if (userFun === 'spotify-this-song') {
    spotify_this_song(process.argv[3]);
} else if (userFun === 'movie-this') {
    movie_this(process.argv[3]);
} else if (userFun === 'do-what-it-says') {
    do_what_it_says();
} else {
    // Asks user to use one of the allowed functions
}

function concert_this(artist) {
    request('https://rest.bandsintown.com/artists/' + artist + '/events?app_id=codingbootcamp', function(error, response, body) {
        if (error) {
            console.log(error);
        }

        let data = JSON.parse(body);
        console.log('----------------------------------')
        for (let i = 0; i < data.length; i++) {
            console.log(`Venue Name: ${data[i].venue.name}`);
            console.log(`Venue Location: ${data[i].venue.city}, ${data[i].venue.region}`);
            console.log(`Date: ${data[i].datetime}`);
            console.log('----------------------------------')
        }
    })
}

function spotify_this_song(song) {
    spotify.search({type: 'track', query: song ? song : 'The Sign Ace of Base'}, function(err, data) {
        if (err) {
            return console.log('Error Occurred: ' + err);
        }

        console.log('-----------------------------------');
        for(let i = 0; i < data.tracks.items.length; i++) {
            let song = data.tracks.items[i];
            // Artist Name
            if (song.artists[0].name) console.log('Artist: ' + song.artists[0].name);

            // Song Title
            if (song.name) console.log('Track Title: ' + song.name);

            // Album Name
            if (song.album.name) console.log('Album: ' + song.album.name);

            // Preview URL
            if (song.preview_url) console.log('Preview of the song: ' + song.preview_url);

            console.log('-----------------------------------');
        }
    })
}

function movie_this(movie) {
    if (movie) for (let i = 0; i < movie.length; i++) {
        if (movie[i] === ' ') movie[i] = '_';
    }
    axios.get(`http://www.omdbapi.com/?t=${movie ? movie : 'Mr._Nobody'}&apikey=trilogy`).then(
        function(response) {
            let data = response.data;
            let ratings = data.Ratings;
            console.log(`Movie Title: ${data.Title}`);
            console.log(`Release Date: ${data.Released}`);
            console.log('Ratings:');
            for (let rating of ratings) {
                console.log(`\t${rating.Source}: ${rating.Value}`);
            }
            console.log(`Country of Production: ${data.Country}`);
            console.log(`Language(s): ${data.Language}`);
            console.log(`Plot: ${data.Plot}`);
            console.log(`Main Cast: ${data.Actors}`);
        }
    )
}

function do_what_it_says() {
    fs.readFile('random.txt', 'utf8', (err, data) => {
        if (err) throw (err);
        data = data.split(',');
        let toCall = data[0];
        let input = data[1];

        if (toCall === 'concert-this') {
            concert_this(input);
        } else if (toCall === 'spotify-this-song') {
            spotify_this_song(input);
        } else if (toCall === 'movie-this') {
            movie_this(input);
        }
    })
}

/* BONUS
Log everything to both Terminal and log.txt
Append each command
Don't overwrite the file each time a command is run
*/