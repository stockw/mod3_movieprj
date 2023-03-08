import React from 'react';
import axios from 'axios';

const DisplayMovie = (props) => {
  let { searchedMovie, movieArray, setMovieArray } = props;
  console.log(searchedMovie, "FROM DISPLAY_MOVIE");
const handleButtonClick = async () => {
  console.log('click');
    // send movie name and ID to server
    await axios({
      method: "POST",
      url: "/add_Movie",
      data: {
        name: searchedMovie.title,
        movieId: searchedMovie.id
      }

    })
    if (!movieArray.includes(searchedMovie.title)) {
      setMovieArray([...movieArray, searchedMovie.title])
}
// return (
//   <section 
//     style={{borderBottom: "4px solid black", marginBottom: "20px", paddingBottom: "12px"}} 
//     onClick={() => handleButtonClick(searchedMovie.title)}
//   >
//     { returnMovieJSX() }
//   </section>
// )
}
  const returnMovieJSX = () => {
    if (searchedMovie !== null) {
      console.log(searchedMovie);
      return (
        <div>
        <h3>MOVIE DISPLAY</h3>
        <h4>{searchedMovie.title}</h4>
        <p>{searchedMovie.id}</p>
      {/* check if posterURL exists */}
      {searchedMovie.poster_path?
      
      <img src={"https://image.tmdb.org/t/p/w500"+searchedMovie.poster_path} alt="Movie Poster" />
      :<div></div> 
      }
      <div></div>
      <button className="watchlist-button btn-sm" onClick={handleButtonClick}>Add to WatchList</button>
      </div>
      )
    } else {
      
      return (
        <div>
          waiting for movie...
        </div>
      )
    }
  }
  return (
    <section 
      style={{borderBottom: "4px solid black", marginBottom: "20px", paddingBottom: "12px"}} 
      onClick={() => handleButtonClick(searchedMovie.title)}
    >
      { returnMovieJSX() }
    </section>
  )
}
// const handleClick = () => {
//   console.log('clicked');
//   // add title of current movie to that array (push it)
//     if (!movieArray.includes(searchedMovie.Title)) {
//     setMovieArray([...movieArray, searchedMovie.Title])
//   }
  
// }

//   return (
//     <section 
//       style={{borderBottom: "4px solid black", marginBottom: "20px", paddingBottom: "12px"}} 
//       // onClick={() => handleClick()}
//     >
//       { returnMovieJSX() }
//     </section>
//   )
// }

export default DisplayMovie