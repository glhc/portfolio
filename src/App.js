import React from 'react';
import logo from './logo.svg';
import Projects from './components/Projects/Projects';
import SocialButtons from './components/SocialButtons/SocialButtons';
import Skills from './components/Skills/Skills';
import './App.scss';

import Landing from './components/Landing/Landing';

function App() {
  return (
    <div className="App">
      <SocialButtons />
      <Landing />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
