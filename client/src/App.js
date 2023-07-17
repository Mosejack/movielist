import React from 'react';
import './App.css';

const movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

function App() {
  const listmovie = movies.map((movie, index) => (
    <li key={index}>{movie.title}</li>
  ));

  return (
    <div className="App">
      <ul>{listmovie}</ul>
    </div>
  );
}

export default App;
