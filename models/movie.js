const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    
    title: {
        type: String,
        required: true,
    },
    movieId: {
        type: Number,
        required: true,
    },
    movieWatched: {
        type: Boolean,
        required: true,
    },
},
{
    timestamps: true
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;