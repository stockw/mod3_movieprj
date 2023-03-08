import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';


const Search = (props) => {
    let {setSearchedMovie} = props;
    let user = props.user;

    let { logString } = props;

    let isFirstRender = useRef(true);
    // logString("This string is from Search Child Component!")
    const [searchString, setSearchString] = useState('');

    useEffect(() => {
        
    const makeServerCall = async (string) => {
        let serverResponse = await axios({
            method: 'GET',
            url: `/get_movie/${string}`
        });
        console.log(serverResponse.data);
        setSearchString('');
        setSearchedMovie(serverResponse.data);
    }
        // make this movie call randomly choose between 10 movies
        if (isFirstRender.current === true) {
            console.log("making api call");
            isFirstRender.current = false;
            makeServerCall("Pacific Rim")
        }
    }, []);
    // listen for submit and make call to server

    const handleChange = (e) => {
        console.dir(e.target.value); // What the element value WOULD BE after the change
        let newValue = e.target.value;
        // was t
        // e.target.value is th
        setSearchString(newValue)
    }

    const makeServerCall = async (string) => {
        let serverResponse = await axios({
            method: 'GET',
            url: `/get_movie/${string}`
        });
        console.log(serverResponse);
        setSearchString('');
        setSearchedMovie(serverResponse.data);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitting!");
        // if we don't prevent the default, the page will refresh
        // call express server with the string
        makeServerCall(searchString)
    };

  return (
    <section style={{borderBottom: "4px solid black", marginBottom: "20px", paddingBottom: "12px"}}>
        <h3>Search</h3>
        <form onSubmit={(event) => handleSubmit(event)}>
            <label htmlFor="movie-search">What movie are you looking for? </label>
            <input 
                type="search" 
                name="movie-search" 
                value={searchString} 
                placeholder="movie name" 
                onChange={(event) => handleChange(event)}
            />
            <button type="">Search</button>
        </form>
    </section>
  )
};

export default Search;