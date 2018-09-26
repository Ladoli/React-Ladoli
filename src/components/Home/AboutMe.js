import React, { Component } from 'react';


class AboutMe extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div className="flexCenter" style={{minHeight: "100vh", display: "flex"}}>
        <div style={{display: "inline-block", width: "100%"}}>
          <div style={{ display: "inline-block", verticalAlign: "bottom", textAlign: "center", width: "100%"}}>
            <a href="https://www.linkedin.com/in/angelo-villadolid-216314163/"><img src="Images/PortfolioPic.jpg" id="portfolioPic"/></a>
            <br/>
            <p style={{fontSize: "3vh", margin: "0px", opacity: ".7"}}>Fullstack Developer</p>
            <p style={{fontSize: "5vh", color: "rgb(50,50,50)"}}>Angelo Villadolid</p>
          </div>

        </div>
        {/* <p className="neatParagraph">This is almost the same as my Portfolio page, except its in React! Currently converting my BlackjackAI game into React. All other pages have been fully integrated into React already.
        </p> */}
      </div>
    );
  }
}

export default AboutMe;
