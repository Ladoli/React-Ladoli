import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'


class RippleScriptSection extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <p className="neatParagraph" style={{color: "rgb(80,80,80)"}}>
          Did you like the ripples at the top banner? Play around with them more here!
        </p>

        <div className="flexCenterAll animateOnScroll hiddenStateScroll" >
          <Button as={ Link } to='RippleScript' primary className="flexCenterAll" >Ripple-script</Button>
        </div>
      </div>
    );
  }
}

export default RippleScriptSection;
