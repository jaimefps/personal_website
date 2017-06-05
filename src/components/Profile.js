import React, { Component } from 'react';

import me from '../assets/images/profile/me.png';
import artist from '../assets/images/pixels/artist.png';
import hacker from '../assets/images/pixels/hacker.png';
import philosopher from '../assets/images/pixels/philosopher.png';

import '../assets/styles/Pixels.css';
import '../assets/styles/Profile.css';

class Profile extends Component {
  render() {
    return (
      <div className="wrap">
      <div className="profile-container">
            <div className="profile-info">
              <div className="name"> Jaime Pericás Sáez </div>
              <img className="me" src={me} />
              <div className='info_desc'>
                <div className="desc"> software engineer </div>
                <a href="#bottom"><div className='contact_me'>contact me</div></a>
              </div>
            </div>
            <div className='bttns'>
              <div><a target='_blank' href='https://github.com/jaimefps'> GitHub </a></div>
              <div><a target='_blank' href='https://www.linkedin.com/in/jaime-pericas-saez/'>  LinkedIn </a></div>
              <div><a target='_blank' href='https://docs.google.com/document/d/1bFQezsn2kNOR8GXDXdSPuME2LK4F7yWD0nseItrXals/edit?usp=sharing'> Resume </a></div>
            </div>
      </div>
      <div className="pixels-container">
            <div className='description'> Programmer by day. Artist & Philosopher by night. </div>
            <div className="imgs-container">
              <img className='pixel-img' src={hacker} />
              <img className='pixel-img' src={artist} />
              <img className='pixel-img' src={philosopher} />
            </div>
      </div>
      </div>
    );
  }
}

export default Profile;

