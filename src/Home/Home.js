import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HomeBanner from './../Home/HomeBanner.js';


class Home extends Component {

  componentDidMount() {
    ReactDOM.render(<HomeBanner />, document.getElementById('banner'));
  }

  render() {
    return (
      <div>
        <div id="banner">

        </div>
        <div id="aboutMe">

        </div>
      </div>
    );
  }
}

export default Home;
