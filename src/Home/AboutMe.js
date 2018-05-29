import React, { Component } from 'react';


class AboutMe extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <div id="afterBanner"><h2 className="declaration animateOnScroll hiddenStateScroll">Welcome to My World!</h2></div>
        <p className="neatParagraph">This is almost the same as my Portfolio page, except its in React! Currently converting my BlackjackAI game into React. All other pages have been fully integrated into React already.
        </p>
        <br/><br/>
      </div>
    );
  }
}

export default AboutMe;
