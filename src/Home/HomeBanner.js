import React, { Component } from 'react';

class HomeBanner extends Component {
  scrollToMain(){
    document.getElementById('afterBanner').scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    return (
      <div className="banner">
        <div id="headBanner" onClick={this.scrollToMain}>
        <img id="V" src="/Images/VMoon.png" alt="My logo"/>
        </div>
        <div className="arrowdown" onClick={this.scrollToMain}></div>
      </div>
    );
  }
}

export default HomeBanner;
