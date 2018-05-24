import React, { Component } from 'react';

class HomeBanner extends Component {
  render() {
    return (
      <div className="banner">
        <div id="headBanner">
        <img id="V" src="/Images/VMoon.png" alt="My logo"/>
        </div>
        <div className="arrowdown"></div>
      </div>
    );
  }
}

export default HomeBanner;
