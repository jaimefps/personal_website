import React, { Component } from 'react';

import phone from '../assets/images/contact/phone.png';
import email from '../assets/images/contact/email.png';
import fb from '../assets/images/contact/facebook.png';

import '../assets/styles/Contact.css';

class Contact extends Component {
  render() {
    return (
      <div id='bottom' className="contact-container">
        <div className='contact'> CONTACT INFORMATION </div>
        <div className='contact'>
          <img className='contact-img' src={email} />
          <div> jaime.pericas.saez@gmail.com </div>
        </div>
        <div className='contact'>
          <img className='contact-img' src={phone} />
          <div> (787) 396 - 7706 </div>
        </div>
        <div className='contact'>
          <img className='contact-img' src={fb} />
          <div> https://www.facebook.com/jaime.f.pericas </div>
        </div>
      </div>
    );
  }
}

export default Contact;