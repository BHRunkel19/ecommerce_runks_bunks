import React, { Component } from 'react';
import '../styles/App.css';
import Bunker from '../styles/AS_bunker.mp4';

export default class App extends Component {
  render() {
    return (
      <div className="main">
        <div className="main_wrapper">
          <h1>Runk's Bunks</h1>
          <h3>The Brand in the Sand</h3>
          <video loop muted autoPlay className="as_bunker" src={Bunker} />
          </div>
      </div>
    );
  }
}
