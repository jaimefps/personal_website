import React, { Component } from 'react';

import spinoza from '../assets/images/spinoza-smile.png';
import github from '../assets/images/github.png';

import '../assets/styles/Projects.css';

class Projects extends Component {
  render() {
    return (
      <div className="projects-container">
        <div className='title'> Applications and Projects</div>
        
        <div className='app-row'>
          <div className='app-container'>
            <img className="app-img" src={github}/>
            <div className='app-desc'> React/Redux Tutorial </div>
          </div>
          <div className='app-container'>
            <img className="app-img" src={spinoza} />
            <div className='app-desc'> Spinoza Navigator </div>
          </div>
          <div className='app-container'>
            <img className="app-img" src={github}/>
            <div className='app-desc'> City Rampage </div>
          </div>
        </div>

        <div className='app-row'>
          <div className='app-container'>
            <img className="app-img" src={github}/>
            <div className='app-desc'></div>
          </div>
          <div className='app-container'>
            <img className="app-img" src={github}/>
            <div className='app-desc'></div>
          </div>
          <div className='app-container'>
            <img className="app-img" src={github}/>
            <div className='app-desc'></div>
          </div>
        </div>

      </div>
    );
  }
}

export default Projects;