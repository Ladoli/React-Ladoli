import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Card, Grid, Icon, Button } from 'semantic-ui-react';
import './AboutMe.css';


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
          <Grid.Column stretched>
            <Card centered className="animateOnScroll hiddenStateScroll">
              <Card.Header>
                <h1 style={{fontSize: "3rem", opacity: ".9"}}>
                  Who am I?
                </h1>
              </Card.Header>
              <Card.Content style={{display: 'flex', flexDirection: 'column'}}>
                <div className="aboutMeTitle">
                  A vancouverite with
                </div>
                <div style={{
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'space-evenly',
                  flex: 1 
                }}>
                  <div className="aboutMeListItem">
                      <Icon color='blue' name='eye' style={{width: "45px"}}/>
                      <span className="aboutMeList">
                            A love for pretty UI
                      </span>
                  </div>
                  <div className="aboutMeListItem">
                      <Icon  color='green' name='angle double up' />
                      <span className="aboutMeList">
                        A devotion to continuous improvement
                      </span>
                  </div>
                  <div className="aboutMeListItem">
                      <Icon color='red' name='food' />
                      <span className="aboutMeList">
                        And a passion for cooking~
                      </span>
                  </div>
                </div>
                {/* <List>
                  <List.Item className="aboutMeListItem">
                    <Icon color='blue' name='eye' style={{width: "45px"}}/>
                    <List.Content>
                      <span className="aboutMeList">
                        A love for pretty UI
                      </span>
                    </List.Content>
                  </List.Item>
                  <List.Item className="aboutMeListItem">
                    <Icon  color='green' name='angle double up' />
                    <List.Content>
                      A devotion to continuous improvement
                    </List.Content>
                  </List.Item>
                  <List.Item className="aboutMeListItem">
                    <List.Icon color='red' name='food' />
                    <List.Content>
                      And a passion for cooking~
                    </List.Content>
                  </List.Item>
                </List> */}
                {/* <Table selectable padded>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>
                        <Icon color='blue' name='eye' />
                      </Table.Cell>
                      <Table.Cell>
                        A vancouverite with a love for pretty UI
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing>
                        <Icon  color='green' name='angle double up' />
                      </Table.Cell>
                      <Table.Cell>
                        A devotion to self-improvement
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing>
                        <Icon  color='red' name='food' />
                      </Table.Cell>
                      <Table.Cell>
                        And a passion for cooking~
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table> */}
              </Card.Content>
              <Card.Content extra style={{textAlign: "center"}}>
                {/* <a href="mailto:villadolidangeloryan@gmail.com">Make something special with me</a><br/>
                OR
                <br/> */}
                <Link to="/ProjectList">
                  <Button primary>
                    Check out what I've made
                  </Button>
                </Link>
                {/* <Link to="/ProjectList"></Link> */}
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default AboutMe;
