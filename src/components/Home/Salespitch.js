import React, { Component } from 'react';
import RippleScriptSection from './RippleScriptSection.js';
import BlackjackSection from './BlackjackSection.js';



class Salespitch extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div className="flexCenter" style={{minHeight: "100vh", display: "flex"}}>
        <div style={{display: "inline-block"}}>
        <p className="neatParagraph" style={{color: "rgb(80,80,80)"}}>
          While here, how about enjoying a game of Blackjack? This project of mine simulates a "two player" blackjack experience. You can play with a friend or against the AI! Both versions have a few differences not just in gameplay but also in design! Be sure to see both!
        </p>
        <br/>
        <BlackjackSection />
        <RippleScriptSection />
      </div>
      </div>
    );
  }
}

export default Salespitch;
