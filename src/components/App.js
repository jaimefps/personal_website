import React, { Component } from 'react';
import Contact from './Contact';
import Pixels from './Pixels';
import Profile from './Profile';
import Projects from './Projects';

import '../assets/styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Profile />
        <Pixels />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
