import React, { Component } from 'react';

import artist from '../assets/images/pixels/artist.png';
import hacker from '../assets/images/pixels/hacker.png';
import philosopher from '../assets/images/pixels/philosopher.png';

import '../assets/styles/Pixels.css';

class Pixels extends Component {
  render() {
    return (
      <div className="pixels-container">

          <div className='description'> Programmer by day. Artist & Philosopher by night. </div>
          <div className="imgs-container">
            <img className='pixel-img' src={hacker} />
            <img className='pixel-img' src={artist} />
            <img className='pixel-img' src={philosopher} />
          </div>

      </div>
    );
  }
}

export default Pixels;