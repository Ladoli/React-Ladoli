import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import HomeBanner from './HomeBanner.js';
import AboutMe from './AboutMe.js';
import Proficiencies from './Proficiencies.js';
import Salespitch from './Salespitch.js';
import BlackjackSection from './BlackjackSection.js'
import RippleScriptSection from './RippleScriptSection.js'
import NonReactSection from './NonReactSection.js'

let thisF ="";


class Home extends Component {

  componentDidMount() {
    window.addEventListener('scroll', this.scrollAnimations);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollAnimations);
  }

  scrollAnimations(){
    let animatables = document.querySelectorAll(".animateOnScroll");
    animatables.forEach(function(element){
      thisF.isInView(element);
    });
    thisF.isInView(document.getElementsByClassName("banner")[0]);
  }

  isInView(element){
    let imagePos = element.getBoundingClientRect().y;
    let screenHeight = window.innerHeight;
    let imageHeight = window.getComputedStyle(element).height.split("p")[0];
    let negative = 0 - imageHeight;
    if(imagePos > negative && imagePos < screenHeight){
      element.classList.remove("hiddenStateScroll");
    }
    else {
      element.classList.add("hiddenStateScroll");
    }
  }

  render() {
    thisF = this;
    return (
      <div>
        <Route exact path={process.env.PUBLIC_URL+"/"} component={HomeBanner}/>
        <Route exact path={process.env.PUBLIC_URL+"/"} component={AboutMe}/>
        <Route exact path={process.env.PUBLIC_URL+"/"} component={Proficiencies}/>
        <Route exact path={process.env.PUBLIC_URL+"/"} component={Salespitch}/>
        <Route exact path={process.env.PUBLIC_URL+"/"} component={BlackjackSection}/>
        <Route exact path={process.env.PUBLIC_URL+"/"} component={RippleScriptSection}/>
        <Route exact path={process.env.PUBLIC_URL+"/"} component={NonReactSection}/>
      </div>
    );
  }
}

export default Home;
