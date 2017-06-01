import React, { Component } from 'react';

import me from '../assets/images/profile/me.png';

import '../assets/styles/Profile.css';

class Profile extends Component {
  render() {
    return (
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
          <div><a target='_blank' href='http://jaimefps.com/'> Online Card </a></div>
          <div><a target='_blank' href='https://docs.google.com/document/d/1bFQezsn2kNOR8GXDXdSPuME2LK4F7yWD0nseItrXals/edit?usp=sharing'> Resume </a></div>
        </div>
      </div>
    );
  }
}

export default Profile;

