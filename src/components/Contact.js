import React, { Component } from 'react';

import Instagram from '../styles/instagram_logo.png';
import Twitter from '../styles/Twitter-Download-PNG.png';
import Facebook from '../styles/facebook-icon.png';

export default class Contact extends Component {
  render(){
    return(
      <div className="contact">
        <h1 className="header">Contact Us</h1>
        <div className="contact_container">
          <h3 className="contact_title">Here's how you can reach us!</h3>
            <div className="social_tabs">
            <img className="social_icon" src={Instagram} alt="instagram logo"/>
            <img className="social_icon" src={Twitter} alt="twitter logo" />
            <img className="social_icon" src={Facebook} alt="facebook logo" />
            </div>
        </div>
      </div>
    )
  }
}
