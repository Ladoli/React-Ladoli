import React, { Component } from 'react';


class NonReactSection extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <br/>
        <br/>
        <p className="neatParagraph">
          Why make a static page in React? Because I can.
        </p>

        <div id="nonReactContainer" className="flexCenterAll animateOnScroll hiddenStateScroll">
          <a className="flexCenterAll" id="versionLink" href="https://ladoli.github.io/index.html">
            Click here to go back to a non-react version.
          </a>
        </div>
        <br/>
      </div>
    );
  }
}

export default NonReactSection;
