import React, { Component } from 'react';

import artist from '../assets/images/artist.png';
import hacker from '../assets/images/hacker.png';
import philosopher from '../assets/images/philosopher.png';

import '../assets/styles/Pixels.css';

class Pixels extends Component {
  render() {
    return (
      <div className="pixels-container">

        <div className="heart-div">
          <div className='description'> Programmer by day. Artist & Philosopher by night. </div>
          <div className="heart-imgs-container">
            <img className='pixel-img' src={hacker} />
            <img className='pixel-img' src={artist} />
            <img className='pixel-img' src={philosopher} />
          </div>
        </div>

      </div>
    );
  }
}

export default Pixels;