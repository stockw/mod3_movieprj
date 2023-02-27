import './App.css';
import { useState } from 'react';
import Search from './components/search';
import DisplayMovie from './components/display_movie';
import FavoriteMovies from './components/favorite_movies';
import MoviePage from './pages/movie_page';

function App() {

  return (
    <div className="App">
      <MoviePage />
    </div>
  );
};

export default App;
