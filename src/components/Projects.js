import React, { Component } from 'react';

import soon from '../assets/images/projects/soon.jpg';
import spinoza from '../assets/images/projects/spinoza-smile.png';
import github from '../assets/images/projects/github.png';
import game from '../assets/images/projects/game.png';
import daytrip from '../assets/images/projects/daytrip.png';
import map from '../assets/images/projects/map.png';

import '../assets/styles/Projects.css';

class Projects extends Component {
  render() {
    return (
      <div className="projects-container">

        <div className='title'> Apps, Projects & Collaborations </div>
        
        <div className='app-row'>
          <a target='_blank' href='http://spinoza.jaimefps.com/'>
            <div className='app-container'>
              <img className="app-img" src={spinoza} />
              <div className='app-desc'> Spinoza Navigator </div>
            </div>
          </a>
          <a target='_blank' href='http://game.jaimefps.com/'>
            <div className='app-container'>
              <img className="app-img" src={game}/>
              <div className='app-desc'> City Rampage </div>
            </div>
          </a>
          <a target='_blank' href='https://github.com/secretChamber/secretChamber'>
            <div className='app-container'>
              <img className="app-img" src={map}/>
              <div className='app-desc'> Neighborly </div>
            </div>
          </a>
          <a target='_blank' href='http://daytrip.crabdance.com/'>
            <div className='app-container'>
              <img className="app-img" src={daytrip}/>
              <div className='app-desc'> Day Trip </div>
            </div>
          </a>
        </div>

        <div className='app-row'>
          <a target='_blank' href='https://github.com/jaimefps/react-redux-tutorial'>
            <div className='app-container'>
              <img className="app-img" src={github}/>
              <div className='app-desc'> react/redux tutorial </div>
            </div>
          </a>
          <a target='_blank' href='https://github.com/jaimefps/react-router-4-teaching-code'>
            <div className='app-container'>
              <img className="app-img" src={github}/>
              <div className='app-desc'> react router tutorial </div>
            </div>
          </a>
          <a target='_blank' href='https://github.com/jaimefps/redux-react-node-mysql-mongo'>
            <div className='app-container'>
              <img className="app-img" src={github}/>
              <div className='app-desc'> fullstack tutorial </div>
            </div>
          </a>
          <div className='app-container'>
            <img className="app-img" src={soon}/>
            <div className='app-desc'> coming soon! </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Projects;