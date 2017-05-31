import React, { Component } from 'react';

import me from '../assets/images/me.png';

import '../assets/styles/Profile.css';

class Profile extends Component {
  render() {
    return (
      <div className="profile-container">
        
        <div className="profile-info">
          <div className="name"> Jaime Pericás Sáez </div>
          <img className="me" src={me} />
          <div className="desc"> full stack web developer </div>
        </div>
        
        <div className='bttns'>
          <div> GitHub </div>
          <div> LinkedIn </div>
          <div> Resume </div>
        </div>

      </div>
    );
  }
}

export default Profile;