import React from 'react'
import './index.css';

const WatchList = (props) => {
    let {movieArray} = props;
    // console.log(movieArray);
    let arrayJSX = movieArray.map((movie, index) => {
        return <div key={index}>
            {movie.title}
        </div>
    })

  return (
    <div style={{marginBottom: "50px"}}>
        <h1 id="wlist">My Watch List</h1>
      <div id="mArray"> 
        {arrayJSX}
      </div>
    </div>
  )
}

export default WatchList