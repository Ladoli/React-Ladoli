import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

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
          <Button as={ Link } to='https://ladoli.github.io/index.html' className="flexCenterAll" id="versionLink">
            Click here to go back to a non-react version.
          </Button>
          {/* <a className="flexCenterAll" id="versionLink" href="https://ladoli.github.io/index.html">
            Click here to go back to a non-react version.
          </a> */}
        </div>
        <br/>
      </div>
    );
  }
}

export default NonReactSection;
