import React, { Component } from 'react';
import { map } from 'lodash';
import { Link } from 'react-router-dom'
import { Card, Grid, Icon, Button } from 'semantic-ui-react';
import './AboutMe.css';

const whoAmIDescriptors = [
  {
    icon: 'eye',
    color: 'blue',
    description: 'A love for pretty UI'
  },
  {
    icon: 'lightbulb',
    color: 'yellow',
    description: 'A knack for solving problems'
  },
  {
    icon: 'angle double up',
    color: 'green',
    description: 'A devotion to continuous improvement'
  },
  {
    icon: 'food',
    color: 'red',
    description: 'And a passion for cooking~'
  }
]

class AboutMe extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div className="flexCenter" style={{minHeight: "100vh", minWidth: "100vw", display: "flex", paddingTop: "40px", paddingBottom: "40px"}}>
        <Grid  stackable doubling columns={2}  style={{ minWidth: "100vw"}}>
          <Grid.Column>
            <div style={{ display: "inline-block", verticalAlign: "bottom", textAlign: "center", width: "100%"}}>
              <a href="https://www.linkedin.com/in/angelo-villadolid-216314163/"  style={{ display: "inline-block", textAlign: "center"}}>
                <div className="picCont" >
                  <img src="Images/PortfolioPic.jpg" id="portfolioPic" alt="Me"/>
                </div>
              </a>
              <p style={{fontSize: "3vh", margin: "0px", opacity: ".7", fontWeight: "500"}}>Fullstack Developer</p>
              <p style={{fontSize: "5vh", color: "rgb(50,50,50)", fontWeight: "400"}}>Angelo Villadolid</p>
            </div>
          </Grid.Column>
          <Grid.Column stretched style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div 
              className="animateOnScroll hiddenStateScroll aboutMeCard"
            >
              <h1 style={{fontSize: "42px", color: '#333', marginBottom: '0px'}}>
                Who am I?
              </h1>
              <div className="aboutMeTitle">
                  A vancouverite with
                </div>
              <Card.Content style={{display: 'flex', flexDirection: 'column'}}>
                <div style={{
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'space-evenly',
                  flex: 1 
                }}>
                  {
                    map(whoAmIDescriptors, (value,key)=>{
                      return (
                        <div className="aboutMeListItem" key={key}>
                          <Icon color={value.color}  name={value.icon} style={{width: "45px"}}/>
                          <span className="aboutMeList">
                            {value.description} 
                          </span>
                        </div>
                      )
                    })
                  }
                </div>
              </Card.Content>
                {/* <a href="mailto:villadolidangeloryan@gmail.com">Make something special with me</a><br/>
                OR
                <br/> */}
                <div style={{
                  width: '100%',
                  textAlign: 'center'
                }}>
                  <Link to="/ProjectList">
                    <Button primary>
                      Check out what I've made
                    </Button>
                  </Link>
                </div>
              </div>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default AboutMe;
