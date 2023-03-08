import './App.css';
import { useState } from 'react';
import Search from './components/search';
import DisplayMovie from './components/display_movie';
import WatchList from './components/watch_list';
import MoviePage from './pages/movie_page';

function App() {

  return (
    <div className="App">
      <MoviePage />
    </div>
  );
};

export default App;
