import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HomeBanner from './HomeBanner.js';
import AboutMe from './AboutMe.js';
import Proficiencies from './Proficiencies.js';
import Salespitch from './Salespitch.js';
import BlackjackSection from './BlackjackSection.js'
import RippleScriptSection from './RippleScriptSection.js'
import NonReactSection from './NonReactSection.js'
import FooterSection from './FooterSection.js'




class Home extends Component {

  componentDidMount() {
    ReactDOM.render(<HomeBanner />, document.getElementById('banner'));
    ReactDOM.render(<AboutMe />, document.getElementById('aboutMe'));
    ReactDOM.render(<Proficiencies />, document.getElementById('proficientIn'));
    ReactDOM.render(<Salespitch />, document.getElementById('salesPitch'));
    ReactDOM.render(<BlackjackSection />, document.getElementById('blackJackSection'));
    ReactDOM.render(<RippleScriptSection />, document.getElementById('rippleScriptSection'));
    ReactDOM.render(<NonReactSection />, document.getElementById('nonReactSection'));
    ReactDOM.render(<FooterSection />, document.getElementById('footerSection'));
  }

  render() {
    return (
      <div>
        <div id="banner">
        </div>
        <div id="aboutMe">
        </div>
        <div id="proficientIn">
        </div>
        <div id="salesPitch">
        </div>
        <div id="blackJackSection">
        </div>
        <div id="rippleScriptSection">
        </div>
        <div id="nonReactSection">
        </div>
        <div id="footerSection">
        </div>
      </div>
    );
  }
}

export default Home;
