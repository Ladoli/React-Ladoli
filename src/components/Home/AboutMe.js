import React, { Component } from 'react';


class AboutMe extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <div id="afterBanner"><h2 className="declaration animateOnScroll hiddenStateScroll">Welcome to My World!</h2></div>
        <div style={{display: "inline-block", width: "100%", height: "200px"}}>

          <div style={{ display: "inline-block", verticalAlign: "bottom", textAlign: "center", width: "100%"}}>
            <a href="https://www.linkedin.com/in/angelo-villadolid-216314163/"><img src="Images/PortfolioPic.jpg" id="portfolioPic"/></a>
            <br/>
            <p style={{margin: "0px", opacity: ".7"}}>Fullstack Developer</p>
            <p style={{fontSize: "20px"}}>Angelo Villadolid</p>
          </div>

        </div>
        {/* <p className="neatParagraph">This is almost the same as my Portfolio page, except its in React! Currently converting my BlackjackAI game into React. All other pages have been fully integrated into React already.
        </p> */}
        <br/><br/>
      </div>
    );
  }
}

export default AboutMe;
