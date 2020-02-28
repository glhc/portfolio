import React from 'react';
import logo from './logo.svg';
import Portfolio from './components/Portfolio/Portfolio';
import './App.scss';

import Landing from './components/Landing/Landing';

function App() {
  return (
    <div className="App">
      <Landing />
      <Portfolio />
    </div>
  );
}

export default App;
