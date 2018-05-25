import React, { Component } from 'react';


class RippleScriptSection extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <p className="neatParagraph">
          Did you like the ripples at the top banner? Play around with them more here!
        </p>

        <div className="flexCenterAll" id="rippleLinkCont">
          <a className="flexCenterAll" id="rippleLink" href="https://ladoli.github.io/rippleScript.html">
            Ripple-script
          </a>
        </div>
      </div>
    );
  }
}

export default RippleScriptSection;
