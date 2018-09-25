import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'


class RippleScriptSection extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div style={{marginBottom: "20%"}}>
        <p className="neatParagraph">
          Did you like the ripples at the top banner? Play around with them more here!
        </p>

        <div className="flexCenterAll animateOnScroll hiddenStateScroll" id="rippleLinkCont" >
          <Button as={ Link } to='RippleScript' primary className="flexCenterAll" id="rippleLink">Ripple-script</Button>
        </div>
      </div>
    );
  }
}

export default RippleScriptSection;
