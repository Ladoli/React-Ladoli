import React, { Component } from 'react';


class FooterSection extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <footer className="">
          <div className="">
            <div className="">
              Contact Me!
              <br/>Email: villadolidangeloryan@gmail.com
            </div>
          </div>
          <div className="">
            <div className="rightFooter">
              Github
              <br/>
              <a href = "https://github.com/Ladoli"><img className="footerLogo" src="Images/V.png" alt="My logo"/></a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default FooterSection;
