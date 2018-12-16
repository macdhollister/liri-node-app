# liri-node-app

Liri is a command-line Node.js application that searches for upcoming concerts, spotify tracks, and movie data. 

## Using Liri

Liri can take one of four commands: 
* concert-this 
* spotify-this-song 
* movie-this 
* do-what-it-says 
 
The first three of these also require a user input immediately after the command name in quotes. 
 

## concert-this
Concert-this searches for upcoming performances from an music artist/band.

Takes: 
* Artist / Band name (in quotes)
 
Returns: 
* Name of venue
* Venue location
* Date of Event (in MM/DD/YYYY format) 
 
![concert-this example](/images/concert-this.PNG) 
 
## spotify-this-song 
Spotify-this-song searches Spotify for a user's search query. 
Also note: spotify-this-song requires a spotify ID and SECRET in a .env file in the following format: 

```
# Spotify API keys

SPOTIFY_ID=<Your ID Here>
SPOTIFY_SECRET=<Your Secret Here>
```
An ID and Secret can be made [here](https://developer.spotify.com/my-applications/#!/applications/create) with a Free or Premium Spotify account.
 
Takes:
* A search query (in quotes) 
 
Returns:
* Artist(s) 
* The song's name 
* The album name that the song is on 
* A preview link of the song (if available)
 
![spotify-this-song example](/images/spotify-this-song.PNG)

## movie-this
Movie-this gives the user information about a movie. 
 
Takes: 
* Movie title 
 
Returns:
* Movie Title 
* Release Date
* Ratings 
* Country of Production 
* Language(s)
* Plot summary 
* Main cast 

![movie-this example](/images/movie-this.PNG)
 
## do-what-it-says 
do-what-it-says reads the "random.txt" file and executes one of the above commands based on the contents. The file contents must be in the format as follows:  

'command-name','user-input'

![do-what-it-says example](/images/do-what-it-says.PNG)
