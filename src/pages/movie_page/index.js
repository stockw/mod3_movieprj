import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Search from '../../components/search';
import DisplayMovie from '../../components/display_movie';
import WatchList from '../../components/watch_list';
import MovieRatings from '../../components/movie_ratings';


const MoviePage = () => {

  const [searchedMovie, setSearchedMovie] = useState(null);
  const [movieArray, setMovieArray] = useState([]);
  const logString = (string) => {
    console.log("string is in APP", string);
  }
// put useEffect that will get all watchlist movies from database and setmoviearray with those movies
useEffect(() => {
  const getWatchList = async () => {
  let response = await axios({
    method: "GET",
    url: "/get_WatchList"
})
console.log(response);
let moviesFromDatabase = response.data
setMovieArray(moviesFromDatabase)
}
getWatchList()
}, [])

  return (
    <div>
        <Search setSearchedMovie={setSearchedMovie} user="Chase" logString={logString}/>
        <DisplayMovie 
            searchedMovie={searchedMovie} 
            movieArray={movieArray} 
            setMovieArray={setMovieArray} 
        />
        {/* display the ratings (map through) */}
        {/* <MovieRatings searchedMovie={searchedMovie} />  */}
        <WatchList movieArray={movieArray} />
     
    </div>
  )
}

export default MoviePage