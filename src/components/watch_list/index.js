import React from 'react'

const WatchList = (props) => {
    let {movieArray} = props;
    console.log(movieArray);
    let arrayJSX = movieArray.map((movie, index) => {
        return <div key={index}>
            {movie.title}
        </div>
    })

  return (
    <div style={{marginBottom: "50px"}}>
        <h1>My Watch List</h1>
        {arrayJSX}
    </div>
  )
}

export default WatchList