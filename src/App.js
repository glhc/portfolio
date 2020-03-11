import React from 'react';
import './App.scss';

import SocialButtons from './components/SocialButtons/SocialButtons';
import Landing from './components/Landing/Landing';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import About from './components/About/About';


function App() {


  return (
    <>
      <SocialButtons />
      <Landing />
      <Projects />
      <Skills />
      <About />
      <SocialButtons footer={true}/>
    </>
  );
}

export default App;
