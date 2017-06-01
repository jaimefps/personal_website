import React, { Component } from 'react';

import phone from '../assets/images/phone.png';
import email from '../assets/images/email.png';

import '../assets/styles/Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="contact-container">
        <div className='contact'> Contact information: </div>
        <div className='contact'>
          <img className='contact-img' src={phone} />
          <div> (787) 396 - 7706 </div>
        </div>
        <div className='contact'>
          <img className='contact-img' src={email} />
          <div> jaime.pericas.saez@gmail.com </div>
        </div>
      </div>
    );
  }
}

export default Contact;