import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import HomeBanner from './HomeBanner';
import AboutMe from './AboutMe';
import Proficiencies from './Proficiencies';
// import Salespitch from './Salespitch.js';
// import BlackjackSection from './BlackjackSection.js'
// import RippleScriptSection from './RippleScriptSection.js'
// import NonReactSection from './NonReactSection.js'

class Home extends Component {

  scrollAnimations(){
    let animatables = document.querySelectorAll(".animateOnScroll");
    let that = this;
    animatables.forEach(function(element){
      that.isInView(element);
    });
    that.isInView(document.getElementsByClassName("banner")[0]);
  }


  constructor(props){
    super(props);
    this.scrollAnimations = this.scrollAnimations.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollAnimations);
    window.addEventListener('mousemove', this.scrollAnimations); //Somewhat fixes bug on some Chrome browsers where onscroll is not triggering... Probably due to plugins installed.
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollAnimations);
    window.removeEventListener('mousemove', this.scrollAnimations);
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
    return (
      <div>
        <Route exact path={process.env.PUBLIC_URL+"/"} component={HomeBanner}/>
        <Route exact path={process.env.PUBLIC_URL+"/"} component={AboutMe}/>
        <Route exact path={process.env.PUBLIC_URL+"/"} component={Proficiencies}/>
        {/* <Route exact path={process.env.PUBLIC_URL+"/"} component={Salespitch}/> */}
        {/* <Route exact path={process.env.PUBLIC_URL+"/"} component={RippleScriptSection}/> */}
        {/* <Route exact path={process.env.PUBLIC_URL+"/"} component={NonReactSection}/> */}
      </div>
    );
  }
}

export default Home;
