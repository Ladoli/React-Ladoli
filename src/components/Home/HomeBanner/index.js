import React, { Component } from 'react';
import rippleScript from 'ripplescript';
import './HomeBanner.css';
import Particles from 'react-particles-js';
class HomeBanner extends Component {
  scrollToMain(){
    document.getElementById('portfolioPic').scrollIntoView({ behavior: 'smooth' });
  }

  componentDidMount() {
    rippleScript('.banner',{delay: 1.7, padding: [50,50], duration: [37,37], interval: 10, randomColors: [true,true], rippleSpread: 20, rippleBlur: 40, maxRipple: 550, minRipple: 300});
  }

  render() {
    return (
      <div 
        className="banner"
      >
        <Particles 
            className="particleDiv"
            canvasClassName="particleContainer"
            params={{
                particles:{
                    opacity:{
                        value: .8,
                        anim: {
                            enable: true,
                            speed: .5,
                            opacity_min: .3,
                        }
                    },
                    color:{
                        value: ['#EEE', '#AA2244', '#EEE', '22EEFF', '#EEE', '#EEE8AA', '#FFF', '#DDD']
                    },
                    number: {
                        // value: 5,
                        density: {
                            enable: true,
                            value_area: 50
                        }
                    },
                    shape:{
                        type: 'circle',
                    },
                    size: {
                        value: 3,
                        random: true
                    },
                    line_linked: {
                        distance: 1,
                        color:  '#61ce70',
                        width: 0,
                        opacity: 0,
                        // shadow: {
                        //     enable: true,
                        //     color: '#aaffaa',
                        //     blur: 4
                        // }
                    },
                    move: {
                        out_mode: 'out',
                        random: true,
                        speed: .3,
                        enable: true,
                        "bounce": false,
                        attract: {
                            enable: false,
                        }
                    },
                
                },
            }}
        />
        <div 
            id="headBanner" 
            onClick={this.scrollToMain}
            style={{
              backgroundColor: 'black'
            }}
          >
          <img id="V" src="/Images/VMoon.png" alt="My logo"/>
          </div>
          <div className="arrowdown" onClick={this.scrollToMain} />
      </div>
    );
  }
}

export default HomeBanner;
