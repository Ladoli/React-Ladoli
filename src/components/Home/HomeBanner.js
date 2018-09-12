import React, { Component } from 'react';

class HomeBanner extends Component {
  scrollToMain(){
    document.getElementById('afterBanner').scrollIntoView({ behavior: 'smooth' });
  }

  componentDidMount() {
    window.rippleAnimation('.banner',{delay: 1, padding: [50,50], duration: [37,37], interval: 20, randomColors: [true,true], rippleSpread: 20, rippleBlur: 40, maxRipple: 550, minRipple: 300});
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
