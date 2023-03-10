import React from 'react'
import './index.css';

const WatchList = (props) => {
    let {movieArray, onDelete} = props;

    const handleDeleteClick = () => {
  onDelete();
}    
    // console.log(movieArray);
    const arrayJSX = movieArray.map((movie, index) => {
        return <div key={index}>
            {movie.title}
        </div>      
    });

       
  return (
    <div style={{marginBottom: "50px"}}>
        <h1 id="wlist">My Watch List</h1>
      <div id="mArray"> 
        {arrayJSX}
      </div>
      <div id='dMovie'>
        <button id='delete' onClick={handleDeleteClick}>Delete List</button>
      </div>
    </div>
  )
}

export default WatchList