import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import rippleScript from 'ripplescript';
import ProjectBanner from './ProjectBanner.js'



class RippleScriptProject extends Component {

  componentDidMount() {
    rippleScript('.topBanner',{randomColors: [true, true], ripppleBlur: 20, rippleSpread: 10});
  }

  rippleUpdate(){
		let duration = 21;
		let padding = 0;
		let ripBlur = document.getElementById('ripBlur').value;
		let randomCol = document.getElementById('ranColor').checked
		let ripSpread = document.getElementById('ripSpread').value;
		let defColor = document.getElementById('defColor').value;
		let interval = document.getElementById('intervals').value;
		if(document.getElementById('duration').value)
			duration = document.getElementById('duration').value;
		if(document.getElementById('padding').value)
			padding = document.getElementById('padding').value;

		window.rippleAnimation('.topBanner',{duration: [duration,duration], interval: interval, randomColors: [randomCol,randomCol], rippleSpread: ripSpread, rippleBlur: ripBlur, defColor: defColor, padding: [padding, padding]});
	}

  render() {
    return (
      <div style={{marginBottom: "20px"}}>
        <Route render={()=><ProjectBanner styleProp={{height: '500px'}}/>}/>
        <div className="flexCenterAll" style={{minHeight: "100vh"}}>
          <div>
            <p className="neatParagraph">
              <div>
                This is one of my reusable projects.
                I've developed a hobby creating CSS animations but they are quite tricky.
                This script, which I named as Ripple-Script, allows anyone to easily add a ripple CSS to their pages as seen above.
                It even has its own NPM package!
                <br/>
                <a href='https://www.npmjs.com/package/ripplescript'>Check it out here!</a>
                <br/><br/>
                You can use the options below (Simplified) to customize how Ripple-Script behaves. Have fun!
              </div>
            </p>
            <br/>
            <center>
              <div id="rippleOptions">
                <p className="rippleOptionsLabel">Duration: </p><input id='duration' type="number"/> <br/>
                <p className="rippleOptionsLabel">Intervals: </p> <input id='intervals' type="number"/><br/>
                <p className="rippleOptionsLabel">Ripple Blur:</p> <input id='ripBlur' type="number"/> <br/>
                <p className="rippleOptionsLabel">Ripple Spread:</p> <input id='ripSpread' type="number"/> <br/>
                <p className="rippleOptionsLabel">Default Color: </p> <input id='defColor' /> <br/>
                <p className="rippleOptionsLabel">Padding: </p> <input id='padding' type="number"/> <br/>
                <p className="rippleOptionsLabel">Random Color: </p> <input id='ranColor' type="checkbox" /> <br/>
                <br/>
              </div>
              <button className="flexCenterAll" id="rippleLink" onClick={this.rippleUpdate}>Update Ripples</button>
            </center>
          </div>
        </div>
      </div>
    );
  }
}

export default RippleScriptProject;
