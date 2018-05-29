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

        <div className="flexCenterAll animateOnScroll hiddenStateScroll" id="rippleLinkCont" >
          <a className="flexCenterAll" id="rippleLink" href="./RippleScript">
            Ripple-script
          </a>
        </div>
      </div>
    );
  }
}

export default RippleScriptSection;
