import React, { useEffect, useState } from 'react';

let query = "Indiana"
const API_URL = "https://movie-database-imdb.p.rapidapi.com/movies/?name=" + query;

const moviesObject = [
    {
        id: "1",
        name: "Indiana Jones and the Dial of Destiny",
        poster: "https://m.media-amazon.com/images/M/MV5BY2M0ZGEwMGQtNzMxOC00OTU2LWExZmUtMTA5N2RhMDZlY2JiXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
        url: "https://www.imdb.com/title/tt1462764"
    },
    {
        id: "2",
        name: "Indiana Jones and the Raiders of the Lost Ark",
        poster: "https://m.media-amazon.com/images/M/MV5BNTU2ODkyY2MtMjU1NC00NjE1LWEzYjgtMWQ3MzRhMTE0NDc0XkEyXkFqcGdeQXVyMjM4MzQ4OTQ@._V1_.jpg",
        url: "https://www.imdb.com/title/tt0082971"
    },
    {
        id: "3",
        name: "Indiana Jones and the Last Crusade",
        poster: "https://m.media-amazon.com/images/M/MV5BY2Q0ODg4ZmItNDZiYi00ZWY5LTg2NzctNmYwZjA5OThmNzE1XkEyXkFqcGdeQXVyMjM4MzQ4OTQ@._V1_.jpg",
        url: "https://www.imdb.com/title/tt0097576"
    },
    {
        id: "4",
        name: "Indiana Jones and the Temple of Doom",
        poster: "https://m.media-amazon.com/images/M/MV5BYzgzMTIzNzctNmNiZC00ZDYyLWJjNzktMmQ2MDM2ZDkwZGVhXkEyXkFqcGdeQXVyMjM4MzQ4OTQ@._V1_.jpg",
        url: "https://www.imdb.com/title/tt0087469"
    },
    {
        id: "5",
        name: "Indiana Jones and the Kingdom of the Crystal Skull",
        poster: "https://m.media-amazon.com/images/M/MV5BZmY5ZTk3ZDMtZjA1MS00NzU4LTk5ZDItYmNhOTkxMGYxMjRlXkEyXkFqcGdeQXVyMjM4MzQ4OTQ@._V1_.jpg",
        url: "https://www.imdb.com/title/tt0367882"
    }
]

// This above object works
console.log("moviesObject:" + moviesObject)
console.log(moviesObject[0])

const MoviesTemp = () => {
    const [moviesObject, setMoviesObject] = useState([]);

    render() {
        return (
            <div>
                <h1>Movie Project From HELL!!!</h1>
                <div className="movieContainer">

                    {moviesObject?.map((movie) => (
                        <div className="card" key={movie.id}>
                            <h1>test</h1>
                            <h1>movie.id</h1>
                            <h1>movie.name</h1>
                            <h1>movie.poster</h1>
                            <h1>movie.url</h1>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default MoviesTemp;

// Thurs - Schedule a Mentor meeting for Friday
// Thurs - a container for the list of movies
//         display just the titles
// Thurs - a component for the movie ??? SAY WHAT?
//         I think it would be its own xxxx.js that is a card or something
//         that is rendered to the app.js?

//         watch videos?
// Thurs - ReviewForm: a form at the bottom of a Movie component that allows users to leave reviews. When submitted, the review should be added to the movie.

// Friday ???? state and shit
// - Stars: a one to five - star rating component that allows users to rate something(movies in this case, but remember that components are reusable, so you could use it elsewhere!)
// - ReviewList: a container inside of a Movie that houses Review components.
// - Review: A text review a user can leave on a movie.
// - All this data can be stored in an array, no networking or database needed for this assignment.


import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        // send HTTP request
        // save it to the state
    }

    render() {
        return (
            <div>
                <h1>This is a view created by a class component</h1>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;