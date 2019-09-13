import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import ProjectBanner from './ProjectBanner.js'

class BlackjackSection extends Component {

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

  scrollAnimations(){
    let animatables = document.querySelectorAll(".animateOnScroll");
    let that = this;
    animatables.forEach(function(element){
      that.isInView(element);
    });
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
      <div style={{marginBottom: "20px"}}>
        <Route render={()=><ProjectBanner styleProp={{height: '500px'}}/>}/>
        <div className="flexCenterAll" style={{minHeight: "100vh"}}>
        <div className="container">
          <p className="neatParagraph" style={{color: "rgb(80,80,80)"}}>
            While here, how about enjoying a game of Blackjack? This project of mine simulates a "two player" blackjack experience. You can play with a friend or against the AI! Both versions have a few differences not just in gameplay but also in design! Be sure to see both!
          </p>
          <br/>
          <div className="row" >
            <div className="col-xs-12 blackjacklinks noSidePadding" style={{textAlign: "center", width: "100%"}}>
              <p>Play with a friend</p>
                <br/>
                  <a href="./Blackjack">
                <div className="animateOnScroll hiddenStateScroll" id="pvp">
                  <div id="pvpBack"></div>
                  <div id="pvpFront"></div>
                </div>
              </a>
            </div>
            {/* <div className="col-lg-6 col-sm-6 col-xs-12 blackjacklinks noSidePadding">
              <p>Play against the Dealer</p>
                <br/>
                  <a href="https://ladoli.github.io/BlackjackAI.html">
                <div className="animateOnScroll hiddenStateScroll" id="vsDealer">
                  <div id="vsDealerBack"></div>
                  <div id="vsDealerFront"></div>
                </div>
              </a>
            </div>
            <br/><br/><br/><br/>
            <br/><br/> */}
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default BlackjackSection;
