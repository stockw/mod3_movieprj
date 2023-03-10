const express = require('express');
const axios = require('axios');
const cors = require('cors')
const app = express();
const path = require('path')

const Movie = require('./models/movie.js');
// const { default: DisplayMovie } = require('./src/components/display_movie/index.js');

require('dotenv').config()
require('./config/database.js');

// console.log(process.env.API_KEY);
app.use(cors('*/*'))

app.use(express.json());

// SERVE THE REACT APP FROM THE SERVER
app.use(express.static(path.join(__dirname, 'build')))

//ROUTES
app.get('/get_movie/:movieString', async (req, res) => {
    console.log(req.params.movieString);

    // call API
    let apiResponse = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${req.params.movieString}`)
    const data = apiResponse.data.results[0];
    console.log(data);
    res.json(data);
});

app.post('/add_Movie', async (req, res) => {
    console.log(req.body);
    let myMovies = await Movie.create({
        title: req.body.name,
        movieId: req.body.movieId,
        movieWatched: false
    })
    console.log(req.body);
    res.send("movie added");
})

app.get('/get_WatchList', async (req, res) => {
    let watchArray = await Movie.find()
    res.json(watchArray)
})

app.delete('/delete_WatchList', async(req, res) => {
    try {
        await Movie.deleteMany();
        res.status(200).send('All movies deleted successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error deleting movies')
    }
});


app.listen(5000, () => {
    console.log(`Server is Listening on 5000`);
});